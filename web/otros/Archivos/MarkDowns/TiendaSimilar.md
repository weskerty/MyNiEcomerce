

<style>

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
}

@media (min-width: 600px) {
  .menu-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 7px 11px; 
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(20px) saturate(1.8);
  -webkit-backdrop-filter: blur(20px) saturate(1.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(255, 255, 255, 0.05);
  text-decoration: none;
  color: white;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.menu-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 1;
}

.menu-item:hover {
  transform: translateY(-3px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.25) 100%
  );
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 rgba(255, 255, 255, 0.08);
  text-decoration: none;
}

.menu-content {
  flex: 1;
  text-align: center;
  padding: 6px 8px;
  position: relative;
  z-index: 2;
}

.menu-content h3 {
  margin: 0 0 3px 0;
  font-size: 1.4em;
  color: white;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.menu-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95em;
  line-height: 1.4;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}

@media (max-width: 600px) {
  .menu-item {
    flex-direction: column;
    text-align: center;
    text-decoration: none;
  }
}

</style>




<div style="text-align:center;">
<h1>💞 Tiendas Similares</h1>
<p>Se listan por su prácticas ecológicas. No estan Relacionadas a YoGano</p>
</div>

<div class="menu-list">
  <a href="https://planetaverdealmacen.com/shop/?orderby=popularity" class="menu-item">
    <img src="https://planetaverdealmacen.com/wp-content/uploads/2024/02/LOGO-TRANS-VERDE-MUSGO.png">
    <div class="menu-content">
      <h3> Planeta Verde</h3>
      <p>Productos Organicos Certificados.</p>
    </div>
  </a>

  <a href="https://ecoagro.org.py/" class="menu-item">
    <img src="https://ecoagro.org.py/wp-content/uploads/2022/09/egroagro-logo-web.svg">
    <div class="menu-content">
      <h3>EcoAgro</h3>
      <p> Asociación Socios EcoAgro</p>
    </div>
  </a>

  <a href="https://reserva-ecologica.com/es/shop-reserva-ecologica" class="menu-item">
    <img src="https://reserva-ecologica.com/s3/b/wsw.website.7236/public/images/pages/folder.4/site_logo.png">
    <div class="menu-content">
      <h3>Reserva Ecologica Caacupe</h3>
      <p> Emprendimiento Aleman </p>
    </div>
  </a>
  
   <a href="https://www.green-k.com.py/categorias/productos" class="menu-item">
    <img src="https://d2me19eryazmrx.cloudfront.net/public/images/seller_logos/C777FA04-7D24-10FF-FA5F-E82A53A9E0EC.jpg">
    <div class="menu-content">
      <h3> Green-K </h3>
      <p> Alimentos Organicos </p>
    </div>
  </a>
  
</div>

</br>

<div style="text-align:center;">
<h1> Asociaciones y Activismo </h1>
<p></p>
</div>

<div class="menu-list">
  <a href="https://www.solucionesecologicas.com.py/" class="menu-item">
    <img src="https://cdn.prod.website-files.com/5c94d80fd5d9bda2d9c9814e/63ef884da3c58011ad8955f7_5c94df82ddf0f4c9d72a28ad_Logo-principal-blanco-sin-fondo-3-p-1080.webp">
    <div class="menu-content">
      <h3>Soluciones Ecologicas</h3>
      <p> Sistema Fomento Reciclaje.</p>
    </div>
  </a>
  
  
 <div class="menu-list">
  <a href="https://www.solucionesecologicas.com.py/" class="menu-item">
    <img src="https://scontent.cdninstagram.com/v/t51.2885-19/464148632_853209509969338_3845869228375076497_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=106&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=-XZhBHhjA1UQ7kNvwHGqCZ8&_nc_oc=AdnDJy-3-ulhzEw-z1JzlGb1Dj0JDtIydAGPIKIiL2mZdvC-hd4D1pFsxWyYz1FF9tM&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_Afu6Aukee8-eJhVSeK4V5FoNXkTytYdvEhRtUzfk0ns_hg&oe=698DB7E8">
    <div class="menu-content">
      <h3>Atrevidos Paraguay</h3>
      <p> Voluntariado de Limpieza y Concientización Ambiental.</p>
    </div>
  </a>

 

</div>