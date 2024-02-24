document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
     
    });
});
