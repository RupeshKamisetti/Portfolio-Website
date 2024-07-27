/*======== toggle icon bar=======*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*======== scroll section active=======*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*======== sticky navbar=======*/

    let header = document.querySelector('header');
    header.classlist.toggle('sticky', window.scrollY > 100);


    /*======== remove toggle icon bar and nav bar=======*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*======== scroll reavel=======*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});

/*======== typed js=======*/
const typed = new Typed('.multiple-text',{
    strings: ['Student', 'Portrait Artist', 'Fullstack Developer'],
    typespeed: 80,
    backspeed: 70,
    backDelay: 1000,
    loop: true,
});

