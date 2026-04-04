### SPA Sencillo pero Veloz

Uso Actual: Expositor de Articulos 

Esto es un Single Page Application o Aplicación de una Sola Página veloz para agregar entradas facilmente en Markdown, ejemplo para tener un blog de facil mantenimiento.

Puede cargar JS y CSS dinamicamente desde cada articulo (util para incrustar videos de tiktok), Tambien puede tener scrips centrales que estan presentes en todo momento (list.json)

Si quieres replicar te Interesa;

SPA web/otros/scripts/Otros/core.js

### Funcionamiento Minimo:

/index.html (carga core.js, mdi y demas)

/web/otros/scripts/Otros/core.js (se puede cambiar en el index)

/web/es.html (primera pagina que carga core.js)

Con solo esos 3 Archivos ya tienes una pagina dinamica funcional, desde es.html puedes ir a otras secciones .md o .html y se cargaran rapidamente 🤗


#### Uso Avanzado

En web/otros/scripts/ exite list.json, ahi se añade la lista de plugins de la misma ruta que core.js

Un ejemplo de eso son las galerias Swiper, que carga las imagenes markdown agrupadas dentro de ˋ<div class="galeriaMD"></div>ˋ o desde data.json (ver POS/scripts/converter.js o workflow galerias)

Espero te sea util, si lo mejoras me gustaria que lo compartieras tambien 🥺👉👈

Respeta la licencia por favor, libre para usar, no para revender.