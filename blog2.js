// script.js

document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const fullContent = this.previousElementSibling;
            fullContent.style.display = 'block';
            this.style.display = 'none';
        });
    });
});
