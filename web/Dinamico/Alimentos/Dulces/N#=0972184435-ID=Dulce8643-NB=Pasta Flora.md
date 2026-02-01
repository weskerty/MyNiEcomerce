<!-- participant: 595972184435 -->


<div class="gallery-container">
    <div class="contenedor-imagenes-animado" >
        {"image": "https://i.ibb.co/4wDx4rJ2/image.png"},
        {"image": "https://scontent.fasu11-2.fna.fbcdn.net/v/t39.30808-6/514410231_1115001350675191_2624946114983517918_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=znxKkQf9FVAQ7kNvwHEdpz9&_nc_oc=AdmJp2D7F7Zrwn0BpjXnKf2XUiRHd0IISfpdj4k-_X_ZaPMxniKjGiLP4TwjVH47gsY&_nc_zt=23&_nc_ht=scontent.fasu11-2.fna&_nc_gid=dh8LkJ_F1lTCCBeEzmBH0A&oh=00_AfY4YQQSlRQoSLbJMAF8o9f3SMHT_L3sH2gRu4UeZGXnjA&oe=68D39DA6", "link": "https://www.facebook.com/photo/?fbid=1115001290675197&set=pcb.1115001380675188"},
        {"image": "https://scontent.fasu11-2.fna.fbcdn.net/v/t39.30808-6/514775657_1115001294008530_110649688472567850_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FkFIWhkiR7IQ7kNvwGmFdea&_nc_oc=AdlLnt7Qzqnl9zlhiUQhbmO00_ftulgTCkhsAPucqc2K9BiS9mM1nFMvHshMNBP8fCQ&_nc_zt=23&_nc_ht=scontent.fasu11-2.fna&_nc_gid=xlVb48LbiBVh-_df5-engQ&oh=00_AfYn5UVwU7m62jPrQrH0mWQUV1azbYFVTkSWTXpcX97J8w&oe=68D378D9", "link": "https://www.facebook.com/photo/?fbid=1115001290675197&set=pcb.1115001380675188"},
        {"image": "https://www.rdn.com.py/wp-content/uploads/2018/01/ID-EDUCACI%C3%93N-jpg.jpg", "link": "https://www.rdn.com.py/2018/01/19/la-mala-educacion-un-problema-global-de-la-realidad-paraguaya/"}
    </div>
</div>

<div> #ClassIdentificativo#
Precio:5000Gs #Variable de acuerdo a la cantidad#

Cantidad: - # +
Añadir al Carrito


</div>



## Ingredientes
- Harina de trigo  
- Margarina  
- Azúcar  
- Huevos  
- Ralladura de limón  
- Dulce de Guallaba
- Polvo de hornear


> Libre de Lacteos; Sin Caseina ni Lactosa.







<!-- > Scrips de Galeria </-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js"></script>

<script>

async function loadGalleryData() {
    try {
        const response = await fetch('web/Dinamico/data.json');
        const data = await response.json();
        return data.galleries;
    } catch (error) {
        return null;
    }
}

function createSwiper(container, images) {
    container.innerHTML = `
        <div class="swiper-wrapper">
            ${images.map(item => `
                <div class="swiper-slide">
                    <a href="${item.link}">
                        <img src="${item.image}" alt="${item.name || 'Imagen'}" loading="lazy" />
                    </a>
                </div>
            `).join('')}
        </div>
    `;

    return new Swiper(container, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });
}

function parseInlineGalleryData(element) {
    try {
        let content = element.textContent.trim();
        if (!content) return null;
        
        content = content.replace(/[\n\r\t]/g, '').replace(/\s+/g, ' ').trim();
        let jsonStr = `[${content}]`.replace(/,\s*]/g, ']');
        
        return { images: JSON.parse(jsonStr) };
    } catch (error) {
        return null;
    }
}

async function initializeAllGalleries() {
    if (typeof Swiper === 'undefined') return;
    
    const allGalleryData = await loadGalleryData();
    
    if (allGalleryData) {
        const galleryElements = document.querySelectorAll('[id$="-gallery"]');
        
        galleryElements.forEach(container => {
            const galleryId = container.id.replace('-gallery', '');
            const matchingKey = Object.keys(allGalleryData).find(key => 
                key.toLowerCase() === galleryId.toLowerCase()
            );
            
            if (matchingKey && allGalleryData[matchingKey].images?.length > 0) {
                container.classList.add('swiper');
                createSwiper(container, allGalleryData[matchingKey].images);
            }
        });
    }

    const inlineGalleries = document.querySelectorAll('.contenedor-imagenes-animado:not([id])');
    
    inlineGalleries.forEach((container) => {
        const inlineData = parseInlineGalleryData(container);
        
        if (inlineData && inlineData.images && inlineData.images.length > 0) {
            container.classList.add('swiper');
            createSwiper(container, inlineData.images);
        }
    });
}

function waitForSwiperAndInit() {
    if (typeof Swiper !== 'undefined') {
        initializeAllGalleries();
    } else {
        setTimeout(waitForSwiperAndInit, 100);
    }
}

setTimeout(() => {
    waitForSwiperAndInit();
}, 500);
</script>