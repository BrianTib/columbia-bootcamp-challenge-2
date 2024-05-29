document.addEventListener('DOMContentLoaded', () => {
    const figures = document.querySelectorAll('#work-grid figure');

    figures.forEach(figure => {
        figure.addEventListener('click', () => {
            const url = figure.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});