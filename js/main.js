// ALMA DE MOTOR - JS REPARADO
// Garantiza efectos de scroll y animaciones

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const reveals = document.querySelectorAll('.reveal');

    // Función para el Navbar
    const handleNavbar = () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Función para Animaciones (Reveal)
    const handleReveal = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    // Escuchar el scroll de forma eficiente
    window.addEventListener('scroll', () => {
        handleNavbar();
        handleReveal();
    });

    // Ejecutar una vez al inicio para elementos ya visibles
    handleNavbar();
    handleReveal();
});
