
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navlist = document.querySelector('.navlist');

    menuIcon.addEventListener('click', function() {
        navlist.classList.toggle('active');
    });
});

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal(".Timindo-text", {delay:200, origin:'top'});
sr.reveal(".Timindo-img", {delay:450, origin:'top'});
sr.reveal(".icons", {delay:500, origin:'left'});
sr.reveal(".scroll-down", {delay:200, origin:'right'});