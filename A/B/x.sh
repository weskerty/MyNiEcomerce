#!/bin/bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOMINIO="https://cheagana.com"

esc() { printf '%s' "$1" | sed -e 's/&/\&amp;/g' -e 's/</\&lt;/g' -e 's/>/\&gt;/g' -e 's/"/\&quot;/g'; }

pedir() {
  local prompt="$1" val=""
  while [ -z "$val" ]; do
    read -r -p "$prompt" val
  done
  printf '%s' "$val"
}

echo "== Generador de paginas de redireccion A/ =="

nombre=$(pedir "Nombre del archivo (sin .html, ej: stickers): ")
nombre="${nombre%.html}"
archivo="$DIR/$nombre.html"

if [ -f "$archivo" ]; then
  echo "El archivo $nombre.html ya existe, sera reemplazado."
fi

titulo=$(pedir "Titulo: ")
descripcion=$(pedir "Descripcion: ")
imagen=$(pedir "URL de la imagen banner: ")
redireccion=$(pedir "URL de redireccion (ej: $DOMINIO/#web/...): ")

t_esc=$(esc "$titulo")
d_esc=$(esc "$descripcion")
i_esc=$(esc "$imagen")
r_esc=$(esc "$redireccion")
url_canonica="$DOMINIO/A/$nombre.html"

cat > "$archivo" <<HTML
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="refresh" content="0; url=$r_esc">
<title>$t_esc</title>
<meta name="description" content="$d_esc">
<link rel="canonical" href="$url_canonica">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Che Agana">
<meta property="og:title" content="$t_esc">
<meta property="og:description" content="$d_esc">
<meta property="og:image" content="$i_esc">
<meta property="og:url" content="$url_canonica">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="$t_esc">
<meta name="twitter:description" content="$d_esc">
<meta name="twitter:image" content="$i_esc">
</head>
<body></body>
</html>
HTML

echo "Listo: $archivo"
