// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('#menu');

menuBtn.addEventListener('click', () => {
    navigation.classList.toggle('active');
    // Change icon when menu is active
    const icon = menuBtn.querySelector('i');
    if (navigation.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`nav a[href*=${sectionId}]`).classList.add('active');
        } else {
            document.querySelector(`nav a[href*=${sectionId}]`).classList.remove('active');
        }
    });
});