document.addEventListener('DOMContentLoaded', () => {

    const burgerButtonMenuOpen = document.querySelector('.burger-button-menu-open');
    const burgerButtonMenuClose = document.querySelector('.burger-button-menu-close');
    const headerBottom = document.querySelector('.header__bottom');

    if(burgerButtonMenuOpen && headerBottom) {
        burgerButtonMenuOpen.addEventListener('click', () => {
            headerBottom.classList.add('is-active');
        });
    }

    if(burgerButtonMenuClose && headerBottom) {
        burgerButtonMenuClose.addEventListener('click', () => {
            headerBottom.classList.remove('is-active');
        });
    }

});
