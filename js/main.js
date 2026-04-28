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

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animación básica del hamburger
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : 'none';
        });
    }

    // Escuchar el scroll de forma eficiente
    window.addEventListener('scroll', () => {
        handleNavbar();
        handleReveal();
    });

    // Ejecutar una vez al inicio para elementos ya visibles
    handleNavbar();
    handleReveal();
});
