
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navlist = document.querySelector('.navlist');

    menuIcon.addEventListener('click', function() {
        navlist.classList.toggle('active');
    });
});
 