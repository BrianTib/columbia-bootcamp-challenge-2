const hamburgerButton = document.getElementById('hamburger-menu');

hamburgerButton.addEventListener('click', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) { return; }
    
    navbar.classList.toggle('open');
});