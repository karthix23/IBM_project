// Example JavaScript for toggling visibility of content
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const contentToToggle = document.querySelector('.toggle-content');

    if (toggleButton && contentToToggle) {
        toggleButton.addEventListener('click', function() {
            contentToToggle.classList.toggle('visible');
        });
    }
});
