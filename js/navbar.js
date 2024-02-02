
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-50px';
    }

    prevScrollPos = currentScrollPos;
});





