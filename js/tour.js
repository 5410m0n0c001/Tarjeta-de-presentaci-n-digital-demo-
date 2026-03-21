/**
 * All In One Cabo - Guided Tour
 * Uses driver.js to walk users through the digital business card features
 */

const startTour = () => {
    const driver = window.driver.js.driver;

    const driverObj = driver({
        showProgress: true,
        steps: [
            { 
                element: '.hero', 
                popover: { 
                    title: '¡Bienvenido!', 
                    description: 'Te damos la bienvenida a la tarjeta digital de All In One Cabo. Aquí encontrarás todo lo que necesitas para tu aventura en Los Cabos.', 
                    side: "bottom", 
                    align: 'start' 
                } 
            },
            { 
                element: '.hero-title', 
                popover: { 
                    title: 'Experiencias Premium', 
                    description: 'Descubre nuestros servicios de yates, tours y actividades exclusivas.', 
                    side: "bottom", 
                    align: 'start' 
                } 
            },
            { 
                element: '.call-btn', 
                popover: { 
                    title: 'Llámanos', 
                    description: 'Contáctanos directamente con un solo clic para consultas inmediatas.', 
                    side: "top", 
                    align: 'start' 
                } 
            },
            { 
                element: '.whatsapp-btn', 
                popover: { 
                    title: 'WhatsApp', 
                    description: '¿Prefieres chatear? Escríbenos por WhatsApp para disponibilidad rápida.', 
                    side: "top", 
                    align: 'start' 
                } 
            },
            { 
                element: '.location-btn', 
                popover: { 
                    title: 'Ubicación', 
                    description: 'Encuentra nuestra oficina fácilmente en Google Maps.', 
                    side: "top", 
                    align: 'start' 
                } 
            },
            { 
                element: '.contacts-btn', 
                popover: { 
                    title: 'Guardar Contacto', 
                    description: 'Descarga nuestra información de contacto directamente a tu agenda telefónica.', 
                    side: "top", 
                    align: 'start' 
                } 
            },
            { 
                element: '.share-btn', 
                popover: { 
                    title: 'Compartir', 
                    description: 'Recomienda nuestros servicios compartiendo esta tarjeta con amigos y familiares.', 
                    side: "top", 
                    align: 'start' 
                } 
            },
            { 
                element: '.collapsible-menu-left', 
                popover: { 
                    title: 'Servicios Exclusivos', 
                    description: 'Explora nuestro menú lateral para ver todos los servicios: Yates, Transporte, Pesca y más.', 
                    side: "right", 
                    align: 'start' 
                } 
            },
            { 
                element: '.collapsible-menu-right', 
                popover: { 
                    title: 'Redes Sociales', 
                    description: 'Síguenos en nuestras plataformas sociales para ver fotos y videos recientes.', 
                    side: "left", 
                    align: 'start' 
                } 
            },
            { 
                element: '.footer', 
                popover: { 
                    title: 'Información Adicional', 
                    description: 'Aquí encontrarás enlaces directos a nuestro sitio web principal y datos del propietario.', 
                    side: "top", 
                    align: 'start' 
                } 
            }
        ],
        nextBtnText: 'Siguiente',
        prevBtnText: 'Anterior',
        doneBtnText: 'Finalizar',
    });

    driverObj.drive();
};

// Start tour after a short delay or based on a specific event
window.addEventListener('load', () => {
    // Check if user has seen the tour before (optional)
    if (!localStorage.getItem('tour_seen')) {
        setTimeout(startTour, 2000);
        localStorage.setItem('tour_seen', 'true');
    }
});

// Expose startTour for manual trigger if needed
window.startTour = startTour;
