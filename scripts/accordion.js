document.addEventListener('DOMContentLoaded', function () {
    var accordions = document.getElementsByClassName("accordion");

    for (var i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            // Toggles the "active" class on the button
            this.classList.toggle("active");

            // Toggle the icon from down to up, and vice versa
            var icon = this.querySelector('i');
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }

            // Toggles the display of the panel
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});
