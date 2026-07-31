#!/usr/bin/env bash
#
# gestionar_cuentos.sh
#
# Script todo-en-uno para:
#   1) Completar o reemplazar las imágenes de cuentos.json buscando en Pexels
#      según el título (completo o solo la palabra más significativa).
#   2) Crear nuevas entradas de cuento (título + descripción manual + imagen
#      buscada automáticamente).
#
# Todas las imágenes se descargan como .jpg desde Pexels y se convierten a
# .avif con ffmpeg (codec libsvtav1), reintentando con más compresión hasta
# quedar por debajo de 100 KB. El nombre final queda como:
#   pexels-<fotografo>-<id>.avif
#
# Requisitos: bash, curl, jq, ffmpeg (con soporte libsvtav1)
#
# Uso:
#   ./gestionar_cuentos.sh
#
set -euo pipefail

JSON_PATH="cuentos.json"
MAX_BYTES=$((100 * 1024))   # 100 KB
PAUSA_SEGUNDOS=3
PAUSA_RATE_LIMIT_SEGUNDOS=3600
PEXELS_SEARCH_URL="https://api.pexels.com/v1/search"

# Palabras cortas a ignorar cuando se busca "solo la palabra más significativa"
# (artículos, preposiciones, conjunciones típicas en español)
STOPWORDS="el la los las un una unos unas de del al a en y o u que se su sus tu tus mi mis para por con sin no ni es son fue era ser estar como más muy este esta esto ese esa eso lo le les te me nos vos ya si sí no tan cada otra otro cual quien quién donde cuando qué"

# ------------------------------------------------------------------
# Utilidades
# ------------------------------------------------------------------

log() { echo "$@" >&2; }

requiere_comando() {
  command -v "$1" >/dev/null 2>&1 || { log "ERROR: falta el comando '$1'. Instálalo antes de continuar."; exit 1; }
}

requiere_comando curl
requiere_comando jq
requiere_comando ffmpeg

if [[ ! -f "$JSON_PATH" ]]; then
  log "ERROR: no se encontró '$JSON_PATH' en la carpeta actual."
  exit 1
fi

# Palabra más significativa (más larga) de un título, ignorando stopwords y símbolos.
# En empate de longitud, se queda con la primera que aparece en el título.
palabra_clave() {
  local titulo="$1"
  local limpio
  limpio=$(echo "$titulo" | tr '[:upper:]' '[:lower:]' | sed -E 's/[¿?¡!«»"“”.,:;()\[\]]/ /g')

  local mejor=""
  local mejor_len=0
  for palabra in $limpio; do
    # ignorar stopwords
    if echo " $STOPWORDS " | grep -qi " $palabra "; then
      continue
    fi
    local len=${#palabra}
    if (( len > mejor_len )); then
      mejor="$palabra"
      mejor_len=$len
    fi
  done

  if [[ -z "$mejor" ]]; then
    # fallback: si todo eran stopwords, usar el título completo
    echo "$titulo"
  else
    echo "$mejor"
  fi
}

# Limpia un título para usarlo como query de búsqueda completa (sin símbolos raros)
limpiar_query_completa() {
  local titulo="$1"
  echo "$titulo" | sed -E 's/[¿?¡!«»"“”.,:;()\[\]]/ /g' | tr -s ' '
}

# Busca en Pexels y descarga+convierte la primera foto del resultado.
# Devuelve por stdout el nombre de archivo final (.avif), o cadena vacía si falla.
buscar_y_convertir() {
  local query="$1"
  local api_key="$2"

  local intentos=0
  local http_code=""
  local body=""

  while true; do
    body=$(curl -s -w "\n%{http_code}" \
      -H "Authorization: ${api_key}" \
      -G "$PEXELS_SEARCH_URL" \
      --data-urlencode "query=${query}" \
      --data-urlencode "per_page=1" \
      --data-urlencode "orientation=landscape")
    http_code=$(echo "$body" | tail -n1)
    body=$(echo "$body" | sed '$d')

    if [[ "$http_code" == "429" ]]; then
      log "  -> Rate limit alcanzado (429). Esperando 1 hora..."
      sleep "$PAUSA_RATE_LIMIT_SEGUNDOS"
      continue
    fi

    if [[ "$http_code" != "200" ]]; then
      log "  -> Error HTTP $http_code para query '$query'"
      echo ""
      return
    fi

    break
  done

  local total_results
  total_results=$(echo "$body" | jq '.photos | length')
  if [[ "$total_results" -eq 0 ]]; then
    log "  -> Sin resultados para '$query'"
    echo ""
    return
  fi

  local photo_id fotografo url_imagen fotografo_slug
  photo_id=$(echo "$body" | jq -r '.photos[0].id')
  fotografo=$(echo "$body" | jq -r '.photos[0].photographer')
  url_imagen=$(echo "$body" | jq -r '.photos[0].src.large')
  fotografo_slug=$(echo "$fotografo" | tr -cd '[:alnum:]' | tr '[:upper:]' '[:lower:]')
  [[ -z "$fotografo_slug" ]] && fotografo_slug="unknown"

  local nombre_base="pexels-${fotografo_slug}-${photo_id}"
  local jpg_tmp="${nombre_base}.tmp.jpg"
  local avif_final="${nombre_base}.avif"

  if ! curl -s -o "$jpg_tmp" "$url_imagen"; then
    log "  -> Error descargando imagen de '$url_imagen'"
    echo ""
    return
  fi

  if ! convertir_a_avif "$jpg_tmp" "$avif_final"; then
    log "  -> No se pudo convertir a AVIF bajo ${MAX_BYTES} bytes: $avif_final"
    rm -f "$jpg_tmp"
    echo ""
    return
  fi

  rm -f "$jpg_tmp"
  echo "$avif_final"
}

# Convierte JPG a AVIF con libsvtav1, reintentando con más compresión (CRF más alto)
# hasta quedar por debajo de MAX_BYTES. Devuelve 0 si lo logró, 1 si no.
convertir_a_avif() {
  local origen="$1"
  local destino="$2"

  # CRFs a probar en orden (de mejor calidad a más compresión).
  # libsvtav1: rango típico útil 20-45 para fotos.
  local crfs=(28 32 36 40 44 48 52 56 60)

  for crf in "${crfs[@]}"; do
    ffmpeg -y -loglevel error -i "$origen" \
      -c:v libsvtav1 -crf "$crf" -preset 6 \
      -pix_fmt yuv420p \
      "$destino" 2>/dev/null

    if [[ -f "$destino" ]]; then
      local peso
      peso=$(stat -c%s "$destino" 2>/dev/null || stat -f%z "$destino")
      if (( peso <= MAX_BYTES )); then
        return 0
      fi
    fi
  done

  # Si ni con el CRF más agresivo entra, achicar resolución y reintentar una vez más
  ffmpeg -y -loglevel error -i "$origen" \
    -vf "scale='min(1280,iw)':-2" \
    -c:v libsvtav1 -crf 50 -preset 6 \
    -pix_fmt yuv420p \
    "$destino" 2>/dev/null

  if [[ -f "$destino" ]]; then
    local peso
    peso=$(stat -c%s "$destino" 2>/dev/null || stat -f%z "$destino")
    if (( peso <= MAX_BYTES )); then
      return 0
    fi
  fi

  rm -f "$destino"
  return 1
}

# ------------------------------------------------------------------
# Flujo principal: preguntas iniciales
# ------------------------------------------------------------------

echo "=== Gestor de imágenes de cuentos.json (Pexels + AVIF) ==="
echo ""
read -rp "API Key de Pexels: " PEXELS_API_KEY
if [[ -z "$PEXELS_API_KEY" ]]; then
  log "ERROR: la API key no puede estar vacía."
  exit 1
fi

echo ""
echo "¿Qué querés hacer?"
echo "  1) Completar/reemplazar imágenes de los cuentos existentes"
echo "  2) Crear un nuevo cuento"
read -rp "Elegí una opción [1/2]: " MODO

if [[ "$MODO" == "2" ]]; then
  # --------------------------------------------------------------
  # MODO: crear nuevo cuento
  # --------------------------------------------------------------
  echo ""
  read -rp "Título del nuevo cuento: " NUEVO_TITULO
  echo "Descripción del nuevo cuento (pegá el texto y presioná Enter):"
  read -rp "> " NUEVA_DESCRIPCION

  echo ""
  read -rp "¿Buscar imagen con título completo o palabra clave? [completo/clave] (clave): " MODO_BUSQUEDA
  MODO_BUSQUEDA=${MODO_BUSQUEDA:-clave}

  if [[ "$MODO_BUSQUEDA" == "completo" ]]; then
    QUERY=$(limpiar_query_completa "$NUEVO_TITULO")
  else
    QUERY=$(palabra_clave "$NUEVO_TITULO")
  fi

  log "Buscando imagen con query: '$QUERY'"
  ARCHIVO_IMAGEN=$(buscar_y_convertir "$QUERY" "$PEXELS_API_KEY")

  NUEVO_ID=$(jq '[.[] .id] | max + 1' "$JSON_PATH")

  jq --argjson id "$NUEVO_ID" \
     --arg titulo "$NUEVO_TITULO" \
     --arg imagen "$ARCHIVO_IMAGEN" \
     --arg descripcion "$NUEVA_DESCRIPCION" \
     '. += [{"id": $id, "titulo": $titulo, "imagen": $imagen, "descripcion": $descripcion}]' \
     "$JSON_PATH" > "${JSON_PATH}.tmp" && mv "${JSON_PATH}.tmp" "$JSON_PATH"

  echo ""
  echo "Nuevo cuento agregado con id=$NUEVO_ID, imagen='$ARCHIVO_IMAGEN'"
  exit 0
fi

# --------------------------------------------------------------
# MODO: completar/reemplazar imágenes existentes
# --------------------------------------------------------------
echo ""
read -rp "¿Reemplazar imágenes ya existentes? [s/N]: " REEMPLAZAR
REEMPLAZAR=${REEMPLAZAR:-N}

echo ""
read -rp "¿Buscar con título completo o palabra clave? [completo/clave] (clave): " MODO_BUSQUEDA
MODO_BUSQUEDA=${MODO_BUSQUEDA:-clave}

TOTAL=$(jq 'length' "$JSON_PATH")
echo ""
echo "Procesando $TOTAL cuentos..."
echo ""

for (( i=0; i<TOTAL; i++ )); do
  TITULO=$(jq -r ".[$i].titulo" "$JSON_PATH")
  IMAGEN_ACTUAL=$(jq -r ".[$i].imagen" "$JSON_PATH")

  if [[ "$REEMPLAZAR" != "s" && "$REEMPLAZAR" != "S" && -n "$IMAGEN_ACTUAL" && "$IMAGEN_ACTUAL" != "null" ]]; then
    echo "[$((i+1))/$TOTAL] '$TITULO' ya tiene imagen ($IMAGEN_ACTUAL), se omite."
    continue
  fi

  if [[ "$MODO_BUSQUEDA" == "completo" ]]; then
    QUERY=$(limpiar_query_completa "$TITULO")
  else
    QUERY=$(palabra_clave "$TITULO")
  fi

  echo "[$((i+1))/$TOTAL] '$TITULO' -> query: '$QUERY'"
  ARCHIVO_IMAGEN=$(buscar_y_convertir "$QUERY" "$PEXELS_API_KEY")

  if [[ -n "$ARCHIVO_IMAGEN" ]]; then
    jq --argjson idx "$i" --arg imagen "$ARCHIVO_IMAGEN" \
       '.[$idx].imagen = $imagen' "$JSON_PATH" > "${JSON_PATH}.tmp" && mv "${JSON_PATH}.tmp" "$JSON_PATH"
    echo "  -> OK: $ARCHIVO_IMAGEN"
  else
    echo "  -> Sin imagen para '$TITULO'"
  fi

  if (( i < TOTAL - 1 )); then
    sleep "$PAUSA_SEGUNDOS"
  fi
done

echo ""
echo "Proceso terminado."