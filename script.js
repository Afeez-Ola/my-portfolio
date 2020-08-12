let navBar = document.querySelector('nav');
window.onscroll = function() {
    if (window.pageYOffset > 0) {
        navBar.classList.add('scroll')
    } else {
        navBar.classList.remove('scroll')
    }
}