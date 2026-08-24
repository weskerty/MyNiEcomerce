blog edicion por numeracion para nuevo post primero... gg

Pendiente: galerias imagen fallback si avif no funciona.

core.js que añada inyeccion extra arriba de cada contenido cargado con env como un estilo o similar, inyecta html ahi, o como un plugin. asi tener barra de navegacion personalizable sin editar core.



discus comentarios, etiqueta dentro de contenido dinamico para que core.js cargue comentario aislado por publicacion

404 hacer busqueda en search. No completado necesita cambios en core.js

### Opcional



core.js prefetch de contenido al hacer hover/pointerdown sobre un link (llenar el cache "i" antes del click). Descartado por ahora: consume datos innecesarios en mobile. Si se retoma, condicionar a conexion wifi o navigator.connection.saveData===false.

core.js loader de plugins (DOMContentLoaded, Promise.all sobre cfg.plugins): los scripts creados con createElement no tienen script.async=false, asi que no se garantiza el orden de ejecucion entre plugins. Hoy no rompe nada porque los plugins actuales son event-driven, pero si un plugin futuro depende de otro ya cargado, agregar script.async=false antes de appendChild.

core.js mismo loader de plugins: o.onerror=n resuelve la promesa igual que onload, asi que un plugin que falla en cargar no deja ningun rastro (ni console.warn). Agregar log minimo en el onerror si se necesita debuggear fallos de plugins en produccion.


search.html cuando llega la ubicacion reconstruye el indice solo con el data.json principal, pierdo blogs, apps y juegos de la busqueda hasta recargar la pagina.

Localizador.md: las categorias siguen hardcodeadas en CAT_EMOJI/CAT_LABEL y en los botones del html. Si subo un punto con una categoria nueva, parseEntry lo descarta en silencio (`if(!CAT_EMOJI[cat])return null`). Para hacerlo dinamico: generar los chips de las categorias que traiga el data.json y dejar esas tablas como opcional de lindura, cayendo al slug con guiones cambiados por espacios.

Localizador.md: mkIcon recibe `sel` y no lo usa, asi que seleccionar un pin no lo destaca en el mapa y se hacen dos setIcon al pedo.

Localizador.md: geoLocate() corre solo al abrir y si acepto setea localStorage.UBI, lo que activa el geo-ordenamiento en todo el sitio. CLAUDE.md dice que UBI nunca se setea automatico. Decidir cual de los dos vale.

Galerias.js: el carrusel no se reordena cuando llega la ubicacion, solo las grillas. Al entrar de nuevo ya sale ordenado. Decidi que no importa.

Galerias.js: si arrastro el carrusel justo mientras esta animando, el gesto se descarta por la guarda `busy` en `onDown` y termina navegando al producto. Ademas `busy` se libera solo en `transitionend`, si la transicion se interrumpe queda trabado para siempre. Se arreglan juntos con un timeout de respaldo en doAdvance/doRetreat.





### Baja Prioridad
Hacer data.json de blog separado. (Ya Existe Logica solo falta editar Blog.html e incluir en Search.html)
Blog cargaria su propio notify/blog.js
Esto para evitar evitar mezclarse con el peso de data.json de los productos. Actualmente esto no es un problema, data.json pesa muy poco.

search.html indexa MiniSearch (ms.addAll) desde cero en cada visita. Con catalogo chico (hoy 16 items) es gratis, pero benchmark con 50000 items sinteticos dio ~630ms de indexado y ~53MB de heap en Node (no en celular real, capaz 4x-8x mas lento en gama baja). Si data.json crece de verdad, precalcular el indice server-side y servirlo como archivo estatico mitigaria eso.

Backend (ServidorPOS/scripts): agregar 4MinisearchCache.js al pipeline, entre 3litemode.js y 9git.js (el runner de x.js ya ordena por numero de archivo, no requiere tocar x.js). Debe correr despues de 2converter.js (que ya deja data.json fresco al final de su IIFE siempre, sea cual sea CONVERT_MODE). Puede reusar web/scripts/Otros/MiniSearch/index.js via require() directo, no hace falta instalar minisearch como dependencia del backend.

Ojo con esto antes de implementar: search.html carga MiniSearch del CDN pineado solo a version mayor (minisearch@7, no @7.2.0 exacto). El indice serializado (toJSON/loadJSON) es sensible a la version interna, asi que backend y navegador tienen que usar la misma version exacta o el indice precompilado podria fallar en el cliente de forma silenciosa. Fijar la version del CDN antes de precompilar.

Escribir el resultado como archivo nuevo (ej. web/Dinamico/search-index.json), no reemplaza data.json. La ventana de frescura seria la misma que ya tiene data.json hoy (pipeline corre al iniciar el server y cada 90 min, sin trigger on-demand por aprobacion de producto).

# 
sw.js notifica pero no descarga el elemento, al entrar en notificacion solo lleva al inicio, no a la nueva entrada. Solo en iOS. Revisar que URL pasa runOPFS() a cada notificacion y si WindowClient.navigate() se comporta distinto en Safari/WebKit.

core.js solo ejecutar en 595972184435 blogs y poco mas.


 https://github.com/MONZikWasTaken/Framegen MIT a medias, no comercial.

### RECHAZADO
Glass https://github.com/ybouane/liquidglass para fondo carrito search
En web/Pruebas/GLASS.html. Rendimiento Deficiente con Video.

data.json rutas en numero
dinamico/categoria/subcategoria/ asi no repetir cada vez, solo una vez por numeracion arriba y luego el nombre del elemento. 1/NB=xxx
La compresion de cloudflare ya resuelve la redundancia. Se mitigo con mas data.json en categorias para un futuro.






Borrado de blog/producto ahora borra tambien web/otros/Archivos/Imagenes/{SN(NB o ID)}. Sirve de aca en adelante porque la carpeta se crea con el mismo SN(), pero de las 6 notas actuales solo coinciden 3: "! Daño Ambiental Actual", "Chau esponja Plástica..." y "Letra Digital para Disléxicos" tienen la carpeta con otro nombre (sin tilde, capitalizada distinto, o cortada), asi que al borrarlas la carpeta va a quedar. El endpoint no avisa, si la ruta no existe devuelve ok igual.

La carpeta de imagenes sale del titulo (blogs) o del ID (productos), asi que renombrar dejaba la carpeta vieja huerfana. Ya no: al guardar una edicion, RND() en editor.js renombra la carpeta y reescribe las rutas dentro del .md. Si falla el reescrito, deshace el rename de la carpeta, para no dejar las imagenes rotas en vivo. Con esto el problema deja de crecer aunque siga editando nombres.

RND() no arregla las 3 notas legacy: si SN(titulo viejo) no existe como carpeta, el rename tira Old not exist y se saltea todo, quedando como antes. O sea que esas 3 siguen sin poder limpiarse solas hasta que renombre la carpeta a mano o corra el GC.

Pendiente GC de imagenes huerfanas: 494KB hoy. La regla que sirve es limpiar solo un directorio de Imagenes/ que referencie exactamente un .md y ningun html/js escrito a mano. Con eso Permanente (18 refs), Grupos (Grupos.html), 7798162143347 (2 .md) y los que no tienen .md dueño quedan afuera solos, sin lista de exclusiones. Ojo: hay que ignorar data.json en el escaneo, lo regenera 2converter.js desde el filesystem y refleja los huerfanos tambien, si lo cuento como referencia nunca borra nada. Hacerlo como script del pipeline con --dry-run por defecto.

Orden del blog: cada .md lleva al final una etiqueta oculta <!--FE=fecha ISO-->. Esa es la fuente de verdad. 4time.js recorre los .md, lee la etiqueta y genera time.json, que es solo un cache derivado: si lo borro se regenera igual desde las etiquetas. blogs.html no parsea nada, solo lee time.json y ordena.

La etiqueta va al FINAL y no al principio a proposito: 3litemode.js corta el titulo con /^#{2,5} .+\n/ anclado al inicio, y una etiqueta arriba lo rompe y el titulo sale duplicado en LiteMode. Verificado en navegador que como comentario HTML no se ve y que LM_DESC1 la limpia de la description.

Para reordenar el blog a mano, edito la etiqueta FE= dentro del .md, no time.json (ese se regenera). Ya no hace falta el "!" de Daño Ambiental para que quede primero.

Una nota sin etiqueta la toma 4time.js y se la escribe una vez, sacando la fecha de time.json si esta, si no de git log --follow, si no del mtime.

Ojo: la fecha de creacion del filesystem (birthtime) no sirve y no se puede arreglar. Se perdio con la copia comun del 13/08 (siete notas comparten el mismo segundo) y en Linux no hay forma de escribirla: touch solo toca mtime, cp y mv entre filesystems la ponen en ahora, y mv dentro del mismo filesystem la conserva porque es el mismo inodo. Solo se falsea cambiando el reloj del sistema, que en este server rompe timestamps de commits y handshakes TLS.

