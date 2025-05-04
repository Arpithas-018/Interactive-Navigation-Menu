const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY) {
        // Scrolling up
        header.style.backgroundColor = '#005f73'; // any color you want
    } else {
        // Scrolling down
        header.style.backgroundColor = '#333'; // original color
    }
    lastScrollY = window.scrollY;
});
