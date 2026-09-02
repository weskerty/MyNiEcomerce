Aqui se te explicara la manera mas facil de como tener tu Pagina Web propia, Similar a esta. 

Primero nos creamos una cuenta en [GitHub ↗️](https://github.com/signup) o el repo que prefieras.


Una vez hayas creado tu cuenta ve a Crear Nuevo Repositorio, este boton: https://github.com/new ![NewRepoButton](web/otros/Archivos/Imagenes/CreatuPropiaPaginaWeb/imagemtjy392m.webp)

Veras algo como esto:

![NewRepo](web/otros/Archivos/Imagenes/CreatuPropiaPaginaWeb/imagemtjy76dj.webp)





Luego Activa la Pagina:
![EnablePAge](web/otros/Archivos/Imagenes/CreatuPropiaPaginaWeb/imagemtjyazw4.webp)

Aparecera algo asi arriba:
![ConfirmPageGit](web/otros/Archivos/Imagenes/CreatuPropiaPaginaWeb/imagemtjybsv2.webp)

Esperas unos segundos, luego Recargas la pagina y veras que ya aparece para visitar tu pagina Web
![image](web/otros/Archivos/Imagenes/CreatuPropiaPaginaWeb/imagemtjye4pq.webp)

Luego todos podrian entrar desde TU-Usuario.github.io/NombreQuePusiste(si-era-la-pagina-xd)

Se puede cambiar el nombre desde conf y tambien cambia esa URL, pero siempre se queda el  TU-Usuario.github.io/ Primero.

### Dominio Propio
El dominio es el www.PalabraQueMeGuste.com
Para poner el que gustes se debe comprar un Dominio. Puedes comprar uno [Desde Aqui ↗️](https://clientes.maxdominios.com/aff.php?aff=1138)

Esa pagina permite comprar incluso tu propio servidor para hostear manualmente tu pagina asi no depender de github ni sus limtes... Pero ahora solo nos interesa el dominio, podes buscar al comprar el plan "solo registrar dominio". Se paga al registrar y al año para renovacion. 




### Configurar el Dominio en GitHub

Ya con el dominio comprado son dos pasos y una espera: apuntar el dominio a GitHub, avisarle a GitHub cual es el tuyo, y esperar a que se acomode.

**1. Apuntar el dominio**

Esto NO se hace en GitHub, se hace del lado de donde compraste el dominio.

Si compraste solo el dominio en MaxDominios, vos no tocas nada: se genera un ticket de soporte y les pedis a que direcciones queres que apunte tu dominio, pasandoles los datos de aca abajo. Ellos cargan los apuntadores. Si en cambio compraste el dominio junto con un hosting, entras a tu panel y los cargas vos mismo.

En cualquiera de los dos casos los datos son los mismos.

Para que ande el dominio pelado (el que va sin www) cargas 4 registros de tipo A, los cuatro con el nombre @ y estas direcciones:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Si tu proveedor te deja cargar IPv6, sumas los mismos cuatro pero de tipo AAAA:

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Para el www va UN solo registro, de tipo CNAME, con el nombre www apuntando a:

```
TU-Usuario.github.io
```

Aca esta el error mas comun de todos: apunta a esa direccion de arriba a secas, SIN el nombre del repositorio. Aunque entres a tu pagina por una direccion que incluye el nombre del repositorio, en el DNS va solo la parte de tu usuario.

**2. Cargarlo en GitHub**

Esto va unicamente desde los ajustes, no se crea ningun archivo a mano.

En tu repositorio: Settings, despues Pages en la barra de la izquierda, y abajo donde dice Custom domain escribis tu dominio y le das Save.

Con eso GitHub crea solo un archivo llamado CNAME en la raiz de tu repositorio, con tu dominio adentro. Ese archivo es el que hace que tu pagina responda en tu dominio: si se borra, tu pagina vuelve a la direccion vieja que te dio GitHub. Por eso, si lo ves aparecer en el repositorio, dejalo tranquilo.

Dos cosas que aclara la documentacion y conviene saber:

- Un mismo dominio no puede estar usado por dos paginas de GitHub Pages a la vez.
- Si usas algun programa que sube la pagina pisando todo el repositorio, te puede borrar ese archivo sin avisar y la pagina se cae del dominio.

**3. Esperar el tilde verde y prender el candado**

GitHub revisa el DNS y te pone un tilde verde cuando ya ve los registros cargados.

Esto no es inmediato y no hay nada que apurar: dale un dia. Si en el momento te dice que el dominio no resuelve, no es que este mal, es que todavia no se termino de repartir el cambio por internet. Cerras, esperas, y al otro dia entras de nuevo.

Cuando aparece el tilde verde se destraba la casilla Enforce HTTPS. Marcala. Eso obliga a que todos entren con https y el candadito. Es gratis, el certificado lo saca GitHub solo.

Un detalle: si en vez de publicar desde una rama publicas con un flujo propio de GitHub Actions, el archivo CNAME no se crea ni se lee, y el dominio se configura unicamente desde Settings, Pages.

[Documentacion GitHub de Dominio Personalizado ↗️](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Los limites de GitHub Pages

Antes de casarte con GitHub, los numeros que publican ellos mismos:

- El repositorio no deberia pasar 1 GB.
- La pagina publicada no puede pasar 1 GB.
- 100 GB de trafico por mes. Es un limite blando: te avisan antes de cortarte.
- 10 compilaciones por hora, tambien blando.

Y lo que NO se puede hostear ahi segun sus condiciones: negocios online, tiendas, servicios pagos, y nada que maneje contrasenas o tarjetas de credito. Para un blog, un portfolio o una pagina informativa va perfecto. Para vender, no.

### Vincular a Cloudflare

Cloudflare se pone adelante de GitHub: el mismo dominio y la misma pagina, pero las visitas pasan primero por su red. Te da cache, estadisticas, proteccion contra ataques, y de paso resuelve el limite de trafico, porque la mayoria de las visitas las contesta Cloudflare sin molestar a GitHub. Es gratis.

El ORDEN de los pasos importa, y es donde se traba todo el mundo:

1. Te creas cuenta en [Cloudflare ↗️](https://dash.cloudflare.com/sign-up) y agregas tu dominio. Te va a dar dos nameservers.
2. Esos dos nameservers hay que cargarlos del lado del dominio. Igual que antes: en MaxDominios se pide por ticket que los cambien por los de Cloudflare, y si tenes hosting propio los cambias vos. Tambien tarda, dale su tiempo.
3. En Cloudflare, en la seccion DNS, cargas los mismos registros de antes (las 4 de tipo A y el CNAME del www), pero los dejas con la nube GRIS, que dice DNS only.
4. Volves a GitHub, esperas el tilde verde y prendes Enforce HTTPS.
5. Recien ahora volves a Cloudflare y pasas las nubes a NARANJA, que dice Proxied.
6. En Cloudflare, en SSL/TLS, poner el modo en Full (strict).

Los dos errores que rompen todo:

- Prender la nube naranja antes de tiempo. GitHub necesita ver tu dominio directo para validarlo y sacar el certificado; con el proxy puesto no puede, y la casilla Enforce HTTPS te queda gris para siempre.
- Dejar el SSL en Flexible. Cloudflare le habla en http a GitHub, GitHub le contesta andate a https, Cloudflare vuelve a pedir en http, y asi para siempre: el navegador termina tirando ERR_TOO_MANY_REDIRECTS. Siempre Full o Full (strict).

Si despues de tocar todo esto algo se ve raro o desactualizado, en Cloudflare hay un boton para purgar el cache. Nueve de cada diez veces es eso.

### El paso siguiente

Si ya estas en Cloudflare, podes saltear GitHub del todo y publicar directo con Cloudflare Pages: le das acceso a tu repositorio y cada vez que subas un cambio la pagina se actualiza sola. Sin el limite de trafico y sin la prohibicion de vender. Esta misma pagina que estas leyendo funciona asi.

<!--FE=2026-09-02T10:48:45.324Z-->
