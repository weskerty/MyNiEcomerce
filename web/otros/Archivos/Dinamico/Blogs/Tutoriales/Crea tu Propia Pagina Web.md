### Modo Gratis

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

### Dominio Propio | OPCIONAL
El dominio es el www.PalabraQueMeGuste.com
Para poner el que gustes se debe comprar un Dominio. Puedes comprar uno [Desde Aqui ↗️](https://clientes.maxdominios.com/aff.php?aff=1138)

Esa pagina permite comprar incluso tu propio servidor para hostear manualmente tu pagina asi no depender de github ni sus limtes... Pero ahora solo nos interesa el dominio, podes buscar al comprar el plan "solo registrar dominio". Se paga al registrar y al año para renovacion. 




### Configurar el Dominio 

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

### Limites de GitHub Pages


- El repositorio no deberia pasar 1 GB.
- La pagina publicada no puede pasar 1 GB.
- 100 GB de trafico por mes. Es un limite blando: te avisan antes.
- 10 compilaciones por hora, tambien blando.





### Facil y Rapido
O tambien podes ir por lo facil y rapido 


![image](web/otros/Archivos/Imagenes/CreatuPropiaPaginaWeb/imagemto8yye1.webp)

Simplemente Solicitas [Desde Aqui ↗️](https://clientes.maxdominios.com/aff.php?aff=1138) y pide que se te arme como quieras. Facil Rapido y Sencillo.










<!--FE=2026-09-02T10:48:45.324Z-->
