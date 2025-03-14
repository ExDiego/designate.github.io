/////CANCEL//////


function goBack() {
    window.history.back();
}


///NAVBAR////

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var dropdownToggle = document.querySelector(".nav-item.dropdown .nav-link"); // "Proyectos"

    // Cierra el menú al hacer clic en cualquier opción del menú (excepto "Proyectos")
    document.querySelectorAll(".nav-link, .dropdown-item").forEach(function (link) {
        link.addEventListener("click", function (event) {
            if (window.innerWidth < 992) { // Solo en móviles
                if (event.target === dropdownToggle) {
                    return; // Evita cerrar si es el menú desplegable
                }
                navbarToggler.click(); // Cierra el menú
            }
        });
    });

    // Cierra el menú al hacer clic fuera de él
    document.addEventListener("click", function (event) {
        if (window.innerWidth < 992) { // Solo en móviles
            var isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
            if (!isClickInsideNavbar && navbarCollapse.classList.contains("show")) {
                navbarToggler.click();
            }
        }
    });
});





////COPY/////

document.addEventListener("DOMContentLoaded", function () {
    var copyEmailBtn = document.getElementById("copyEmailBtn");
    var emailText = document.getElementById("emailText");

    // Inicializar tooltip
    var tooltip = new bootstrap.Tooltip(copyEmailBtn, {
        trigger: "hover",
    });

    copyEmailBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(emailText.textContent).then(function () {
            // Ocultar y destruir el tooltip actual
            tooltip.dispose();

            // Cambiar el mensaje del tooltip
            copyEmailBtn.setAttribute("data-bs-title", "¡Copiado!");
            
            // Crear un nuevo tooltip con el mensaje actualizado
            tooltip = new bootstrap.Tooltip(copyEmailBtn);
            tooltip.show();

            // Restaurar el mensaje original después de 2 segundos
            setTimeout(() => {
                tooltip.dispose();
                copyEmailBtn.setAttribute("data-bs-title", "Copiar correo");
                tooltip = new bootstrap.Tooltip(copyEmailBtn);
            }, 2000);
        });
    });
});



///Scroll///

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Evita el salto instantáneo
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajusta este valor si hay un navbar fijo
                behavior: "smooth"
            });
        }
    });
});






















// Inicializar componentes de MDBootstrap
/* document.addEventListener("DOMContentLoaded", function() {
    // Inicializar tooltips, popovers, etc.
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}); */