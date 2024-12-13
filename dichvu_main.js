// script.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Chế độ sáng';
        } else {
            darkModeToggle.textContent = 'Chế độ tối';
        }
    });

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
