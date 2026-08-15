core.js permite arrastrar enlaces, incluso galeria e img


galerias no clic derecho igual que core.ja heredar funcion, galerias imagen fallback si avif no funciona.

core.js que añada inyeccion extra arriba de cada contenido cargado con env como un estilo o similar, inyecta html ahi, o como un plugin. asi tener barra de navegacion personalizable sin editar core.

index.html no script puede probar una funcion script especifica de navegadores 2026, si no esta disponible manda a LiteWeb/NavegadoresModernos.html


frases script añadir nuevo, añadir numeracion, titulo, descripcion y auto busqueda.

Mostrar instalador https://khmyznikov.com/pwa-install/ asi no se tiene que descubrir. Blog, central page, es, install.js plugin permanente es el que mostraria, pondria un marcador para no aparecer como rendimiento

animacion paso pestañas captura en low device desactivar. low device sera el mismo que reducemotion



404 hacer busqueda en search. No completado necesita cambios en core.js

### Opcional

https://socket.io/

search abrir teclado.

core.js prefetch de contenido al hacer hover/pointerdown sobre un link (llenar el cache "i" antes del click). Descartado por ahora: consume datos innecesarios en mobile. Si se retoma, condicionar a conexion wifi o navigator.connection.saveData===false.

core.js loader de plugins (DOMContentLoaded, Promise.all sobre cfg.plugins): los scripts creados con createElement no tienen script.async=false, asi que no se garantiza el orden de ejecucion entre plugins. Hoy no rompe nada porque los plugins actuales son event-driven, pero si un plugin futuro depende de otro ya cargado, agregar script.async=false antes de appendChild.

core.js mismo loader de plugins: o.onerror=n resuelve la promesa igual que onload, asi que un plugin que falla en cargar no deja ningun rastro (ni console.warn). Agregar log minimo en el onerror si se necesita debuggear fallos de plugins en produccion.


Search buscar ID= tambien

Galerias podria mostrar precios antes de entrar, search tambien...




### Baja Prioridad
Hacer data.json de blog separado. (Ya Existe Logica solo falta editar Blog.html e incluir en Search.html)
Blog cargaria su propio notify/blog.js
Esto para evitar evitar mezclarse con el peso de data.json de los productos. Actualmente esto no es un problema, data.json pesa muy poco.

# 
sw.js notifica pero no descarga el elemento, haciendo que al entrar en notificacion solo lleve al inicio, no a la nueva entrada



### RECHAZADO
Glass https://github.com/ybouane/liquidglass para fondo carrito search
En web/Pruebas/GLASS.html. Rendimiento Deficiente con Video.

data.json rutas en numero
dinamico/categoria/subcategoria/ asi no repetir cada vez, solo una vez por numeracion arriba y luego el nombre del elemento. 1/NB=xxx
La compresion de cloudflare ya resuelve la redundancia. Se mitigo con mas data.json en categorias para un futuro.





