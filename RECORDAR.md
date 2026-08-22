RESUELTO: pwa-install se auto-mostraba solo al cargar la pagina, con texto generico por defecto, y Google lo indexaba como snippet en vez de la meta description real. Arreglado con manual-apple manual-chrome en el tag (index.html) + flag PI_SEEN1 en localStorage (install.js): primera visita solo marca el flag, segunda visita en adelante dispara pi.showDialog(true) solo. Verificar en Google Search Console mas adelante que el snippet se corrigio (la reindexacion no es instantanea).

RESUELTO: fallback local de pwa-install no existia en disco. Agregado a scripts/Otros/update.sh (junto con mkdir -p para que cree la carpeta si falta) y ya se corrio una vez, asi que web/scripts/Otros/PwaInstall/pwa-install.bundle.js existe.

RESUELTO: core.js permitia arrastrar enlaces e imagenes (drag nativo del navegador). Agregado document.addEventListener("dragstart",ev=>ev.preventDefault()) sin condicionar a mobile, cubre tambien lo que inserta Galerias.js dinamicamente.

RESUELTO: galerias no coincidia con el bloqueo de click derecho de core.js. Simplifique el de core.js (sin excepciones, igual que el de Galerias.js), asi quedan iguales sin duplicar logica.

Pendiente: galerias imagen fallback si avif no funciona.

core.js que añada inyeccion extra arriba de cada contenido cargado con env como un estilo o similar, inyecta html ahi, o como un plugin. asi tener barra de navegacion personalizable sin editar core.

RESUELTO: index.html ya prueba compatibilidad de navegador (optional chaining via new Function) y manda a web/LiteMode/index.html si falla, mas el noscript descomentado para JS desactivado.


RESUELTO: animacion de transicion entre paginas (view transition) desactivada en low-perf. _vt() en core.js y regla CSS en estilo.css junto a la de prefers-reduced-motion.

RESUELTO: video de fondo tambien se desactiva en low-perf, mismo criterio que la view transition (funcion a() en core.js).

RESUELTO: touchmove no-pasivo (bloqueaba pellizco-zoom pero encarecia cualquier scroll tactil) reemplazado por touch-action:pan-x pan-y en estilo.css. Mismo resultado, sin listener por evento.

RESUELTO: fetch del contenido principal en l() (core.js) ahora pide priority:'high' para competir mejor contra ads/fuentes externas por la conexion.

discus comentarios, etiqueta dentro de contenido dinamico para que core.js cargue comentario aislado por publicacion

404 hacer busqueda en search. No completado necesita cambios en core.js

### Opcional

RESUELTO: search abrir teclado. inp.focus() agregado en onCL() de search.html.

core.js prefetch de contenido al hacer hover/pointerdown sobre un link (llenar el cache "i" antes del click). Descartado por ahora: consume datos innecesarios en mobile. Si se retoma, condicionar a conexion wifi o navigator.connection.saveData===false.

core.js loader de plugins (DOMContentLoaded, Promise.all sobre cfg.plugins): los scripts creados con createElement no tienen script.async=false, asi que no se garantiza el orden de ejecucion entre plugins. Hoy no rompe nada porque los plugins actuales son event-driven, pero si un plugin futuro depende de otro ya cargado, agregar script.async=false antes de appendChild.

core.js mismo loader de plugins: o.onerror=n resuelve la promesa igual que onload, asi que un plugin que falla en cargar no deja ningun rastro (ni console.warn). Agregar log minimo en el onerror si se necesita debuggear fallos de plugins en produccion.


Search buscar ID= tambien

Galerias podria mostrar precios antes de entrar, search tambien...




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





