document.addEventListener('DOMContentLoaded', () => {
    // Create a selector that targets all elements with the id of 'work-grid' and the tag name of 'figure'
    const figures = document.querySelectorAll('#work-grid figure');

    // Loop through each figure element and add a click event listener
    figures.forEach(figure => {
        // When a figure element is clicked, get the value of the 'data-url' attribute
        figure.addEventListener('click', () => {
            const url = figure.getAttribute('data-url');
            // If the 'data-url' attribute exists, redirect the user to the URL
            if (url) {
                window.location.href = url;
            }
        });
    });
});