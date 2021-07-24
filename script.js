const toggleBtn = document.querySelector('.toggle-nav');
const nav = document.querySelector('.nav-mobile');
const hamburger = 'images/icon-hamburger.svg';
const close = 'images/icon-close.svg';
const toggleImg = document.querySelector('.toggle-img');

const toggleNav = () => {
    nav.classList.toggle('active');
    if(nav.classList.contains('active')) {
        toggleImg.src= close;
    } else {toggleImg.src = hamburger;}
}


toggleBtn.addEventListener('click', toggleNav);