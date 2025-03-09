

////COPY/////

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente cargado"); // Verifica que el DOM está listo
    document.getElementById("toggle-text").addEventListener("click", function() {
        console.log("Botón clicado"); // Verifica si el botón se está clicando
        var mobileText = document.getElementById("mobile-text");
        if (mobileText.classList.contains("show")) {
            mobileText.classList.remove("show");
        } else {
            mobileText.classList.add("show");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var copyEmailBtn = document.getElementById('copyEmailBtn');
    var emailText = document.getElementById('emailText');
    var tooltip = new bootstrap.Tooltip(copyEmailBtn); // Inicializar tooltip

    copyEmailBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(emailText.textContent).then(function () {
            // Cambiar el texto del tooltip a "¡Copiado!"
            copyEmailBtn.setAttribute('data-bs-title', '¡Copiado!');
            tooltip.dispose(); // Destruir tooltip actual
            tooltip = new bootstrap.Tooltip(copyEmailBtn); // Crear nuevo con el cambio
            tooltip.show(); // Mostrar tooltip actualizado

            // Restaurar el texto original después de 2 segundos
            setTimeout(() => {
                copyEmailBtn.setAttribute('data-bs-title', 'Copiar correo');
                tooltip.dispose();
                tooltip = new bootstrap.Tooltip(copyEmailBtn);
            }, 2000);
        });
    });
});


/////NAVBAR/////

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Cuando scrolleas más de 50px
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



/////CANCEL//////


function goBack() {
    window.history.back();
}




////zooom experimental////








/////ZOOM/////

/* const img = document.getElementById("zoomable-image");
const container = document.querySelector(".image-container");
const zoomWrapper = document.querySelector(".zoom-wrapper");

let isZoomed = false;
let scale = 6.5; // Nivel de zoom

img.addEventListener("click", function(event) {
    const rect = img.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;

    if (!isZoomed) {
        img.style.transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
        img.style.transform = `scale(${scale})`;
        img.style.cursor = "zoom-out";

        container.style.overflow = "auto";
        document.body.style.overflow = "hidden";

        setTimeout(() => {
            const zoomWidth = zoomWrapper.scrollWidth;  // Ancho del contenedor con zoom
            const zoomHeight = zoomWrapper.scrollHeight; // Alto del contenedor con zoom
        
            const scrollX = Math.max(0, Math.min(zoomWidth - container.clientWidth, zoomWidth * offsetX - container.clientWidth / 2));
            const scrollY = Math.max(0, Math.min(zoomHeight - container.clientHeight, zoomHeight * offsetY - container.clientHeight / 2));
        
            container.scrollLeft = scrollX;
            container.scrollTop = scrollY;
        }, 50);
        
        isZoomed = true;
    } else {
        img.style.transform = "scale(1)";
        img.style.cursor = "zoom-in";

        container.style.overflow = "auto";
        document.body.style.overflow = "auto";

        isZoomed = false;
    }
}); */



//// Lista de servicios /////
/* 
const triggerTabList = document.querySelectorAll('#myTab a')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
}) */


///Off Canvas Móvil///

/* document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM completamente cargado");

    // Obtener elementos
    const offcanvas = document.getElementById("offcanvas-menu");
    const toggleButton = document.getElementById("menu-toggle");

    if (!offcanvas || !toggleButton) {
        console.error("No se encontró el menú offcanvas o el botón de activación.");
        return; // Evita que el código siga ejecutándose si los elementos no existen
    }

    console.log("Elementos encontrados:", offcanvas, toggleButton);

    const links = offcanvas.querySelectorAll("a");

    function closeOffcanvas() {
        offcanvas.classList.remove("open");
    }

    toggleButton.addEventListener("click", function (event) {
        event.stopPropagation();
        offcanvas.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        if (!offcanvas.contains(event.target) && !toggleButton.contains(event.target)) {
            closeOffcanvas();
        }
    });

    links.forEach(link => {
        link.addEventListener("click", closeOffcanvas);
    });

    console.log("Event listeners agregados correctamente.");
}); */












// Inicializar componentes de MDBootstrap
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar tooltips, popovers, etc.
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});