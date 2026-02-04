# Política de Privacidad

## 1. Responsable del Tratamiento
YoGano, con contacto en: 

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white)](https://wa.me/595972184435) 


## 2. Datos Personales Recopilados
Para gestionar la participación en rifas y/o procesar compras, recopilamos los siguientes datos cuando interactúas con nosotros a través de WhatsApp o Telegram.
- **Nombre completo**.
- **Número de teléfono** (Solo WhatsApp, en telegram se usa tu @Alias ID)
- **Foto de perfil** (únicamente en el caso de rifas y si está visible en tu perfil en el momento del contacto). 

## 3. Finalidades del Tratamiento
- **Gestión de participaciones en rifas**.
- **Procesamiento y verificación de compras/ventas**.
- **Comunicación necesaria para la ejecución del servicio**.
- **Verificación de identidad y personalización de la atención** (en el caso de la foto, solo si has dado consentimiento).

## 4. Base Legal
- **Ejecución de contrato o precontrato**: para gestionar tu compra o participación.
- **Consentimiento explícito**: para el tratamiento de tu foto de perfil, que puedes retirar en cualquier momento sin afectar la transacción principal.

## 5. Almacenamiento y Seguridad
Los datos se almacenan de forma segura en una base de datos para prevenir acceso no autorizado o divulgación. No se comparten con terceros, salvo que la Policia lo Pidiese.

## 6. Conservación de los Datos
Tus datos se conservarán maximo por 1 año o si el tamaño del registro es muy grande.

## 7. Tus Derechos 
Puedes solicitar en todo momento;
- **Acceso** a tus datos.
- **Rectificación** si son inexactos.
- **Cancelación** (borrado de datos).
- **Oposición** al tratamiento (cancelacion)
- **Revocación de datos** (para la foto etc).

Para Solicitar, contacta a: 

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white)](https://wa.me/595972184435) 

## 8. Uso de la Foto de Perfil
La foto de perfil de WhatsApp o Telegram **no es obligatoria** para realizar compras o participar en rifas. Su recopilación es opcional y se utiliza únicamente para personalización. Puedes solicitar su eliminación en cualquier momento, manteniendo activa tu participación o compra.

## 10. Cambios en esta Política
Nos reservamos el derecho de actualizar esta política. Las modificaciones se publicarán en esta página con la fecha de última actualización.

**Última actualización:** 


<script>
const archivoPath = 'web/otros/MarkDowns/PoliticaPrivacidad.md';
const repo = 'weskerty/YoGano';
const branch = 'main';

async function obtenerUltimoCommit() {
    const url = `https://api.github.com/repos/${repo}/commits?path=${archivoPath}&sha=${branch}&per_page=1`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error: No Datos Git');
        const commits = await response.json();
        if (commits.length === 0) {
            document.getElementById('fecha').textContent = 'No commit.';
            return;
        }
        const fechaCommit = commits[0].commit.author.date;
        const fechaFormateada = new Date(fechaCommit).toLocaleString('es-ES', {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
        document.getElementById('fecha').textContent = fechaFormateada;
    } catch (error) {
        console.error(error);
        document.getElementById('fecha').textContent = 'Error en fecha.';
    }
}

obtenerUltimoCommit();
</script>