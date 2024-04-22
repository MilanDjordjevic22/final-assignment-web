document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const popup = document.getElementById('popup-message');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        popup.style.display = 'block';
        setTimeout(() => { popup.style.display = 'none'; }, 5000); 
        form.reset();
    });
});
