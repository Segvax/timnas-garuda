let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classlist.toggle('bx-x')
    navlist.classlist.toggle('bx-x')
};

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