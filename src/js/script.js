// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const FixedNav = header.offsetTop;

    if (window.pageYOffset > FixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
})