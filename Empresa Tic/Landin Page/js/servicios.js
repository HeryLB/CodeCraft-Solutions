document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que la página recargue
        const moreInfo = this.nextElementSibling;
        if (moreInfo.style.display === 'block') {
            moreInfo.style.display = 'none';
        } else {
            moreInfo.style.display = 'block';
        }
    });
});
