// This uses the DOM to select the element with the ID 'hamburger-menu;
const hamburgerButton = document.getElementById('hamburger-menu');

// This adds an event listener to the hamburgerButton element that listens for a 'click' event
hamburgerButton.addEventListener('click', () => {
    // This selects the element with the ID 'navbar'
    const navbar = document.getElementById('navbar');
    // If the navbar element does not exist, exit the function
    if (!navbar) { return; }
    
    // This toggles the 'open' class on the navbar element
    // Which allows the menu to be visible
    navbar.classList.toggle('open');
});