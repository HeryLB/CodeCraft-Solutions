document.getElementById('contactButton').addEventListener('click', function() {
    const form = document.getElementById('contactForm');
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});
