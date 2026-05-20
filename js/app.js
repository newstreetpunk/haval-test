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

    // COLORS

    const colorLinks = document.querySelectorAll('.color-link');
    if(colorLinks) {
        colorLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();

                if(link.classList.contains('is-active')) return;

                const parent = link.closest('.model__item');
                const modelImageWrapper = parent.querySelector('.model__item--image');
                const modelImage = parent.querySelector('.model__item--image img');
                const color = link.getAttribute('data-color');
                const carImagePath = link.getAttribute('data-car-image');

                // Загружаем изображение для проверки
                let img = new Image();
                img.onload = function () {
                    // Изображение существует - меняем его
                    parent.querySelectorAll('.color-link.is-active').forEach((el) => {
                        el.classList.remove('is-active');
                    });
                    parent.querySelector(`[data-color='${color}']`).classList.add('is-active');                    
                    modelImage.remove();
                    modelImageWrapper.append(img);
                }
                img.onerror = function() {
                    // Изображение не существует - обрабатываем ошибку
                    console.error(`Изображение не найдено: ${carImagePath}`);
                    // Можно показать заглушку или ничего не менять
                }
                img.src = carImagePath;

            });
        });
    }

});
