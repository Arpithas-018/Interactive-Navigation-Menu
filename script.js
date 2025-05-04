const header = document.getElementById('mainHeader');
const navLinks = document.querySelectorAll('nav a');

// Change header style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled-nav');
    } else {
        header.classList.remove('scrolled-nav');
    }
});

// Hover effect on navigation links
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#555';
        link.style.color = '#eee';
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
        link.style.color = 'white';
    });
});

// Smooth scrolling to sections
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});
