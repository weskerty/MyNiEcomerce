### SPA sencillo pero veloz

**Uso actual:** expositor de artículos. Para que gente con interes ambiental levante sus tiendas ecologicas facilmente.




Es una *Single Page Application* (SPA) rápida para agregar entradas en Markdown. Ideal para un blog de Facil mantenimiento.

Puede cargar JS y CSS dinámicamente desde cada artículo (útil para incrustar contenido como TikTok). También admite scripts globales especificados en `list.json`.

Si querés replicarlo:

**SPA:**  
[core.js](web/scripts/Otros/core.js)

---

### Funcionamiento mínimo

- [index.html](/index.html) → carga `core.js`, MDI, etc.  
- [core.js](/web/scripts/Otros/core.js) → SPA, ruta configurable desde `index`  
- [es.html](/web/es.html) → primera página que carga `core.js`  
- [estilo.css](/web/estilo.css) → tema de la web

Con solo esos 3 archivos ya tenés una página dinámica funcional. Desde `es.html` podés navegar a `.md` o `.html` y se cargan rápidamente.

---

### Uso avanzado

En `web/otros/scripts/` existe `list.json`, donde se define la lista de plugins que se cargan junto a `core.js`. Estos scripts permanecen en toda la navegacion. 

Ejemplo: galerías con Swiper. Permite agrupar imágenes Markdown dentro de:

`<div class="galeriaMD"></div>`

O cargarlas desde `data.json` (ver `POS/scripts/converter.js` o workflow de galerías).

---

Espero que te sea útil. Si lo mejorás me gustaria ver tambien 🥺👉👈

Respetá la licencia: libre para usar, no para revender.
