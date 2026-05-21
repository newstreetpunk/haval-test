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

    // MODALS

    const popupLinks = document.querySelectorAll(".popup-link");
    const modalOverlays = document.querySelectorAll(".modal-overlay");

    if( popupLinks.length ) {

        popupLinks.forEach(link => {
            link.onclick = (e) => {
                e.preventDefault();

                let id = link.getAttribute("href") || link.dataset.target;
                if (id === "#" || !id) return;

                const targetModal = document.getElementById(id.replace("#", ""));
                if (!targetModal) return;

                const formTitle = targetModal.querySelector(".modal-title");
                if (formTitle) {
                    formTitle.innerHTML = link.dataset.title || 'Обратная связь';
                }
                const formSubtitle = targetModal.querySelector(".modal-subtitle");
                if (formSubtitle) {
                    formSubtitle.innerHTML = link.dataset.subtitle || 'Оставьте свои данные и мы свяжемся с Вами в ближайшее время!';
                }
                const formName = link.dataset.form_name;
                const formInput = targetModal.querySelector('input[name="form"]');
                if (formName && formInput) {
                    formInput.value = formName;
                }
                
                targetModal.removeAttribute("hidden");
                document.body.classList.add("overflow-hidden");
            }
        });

    }

    if( modalOverlays.length ) {
        modalOverlays.forEach((el) => {
            document.addEventListener("keydown", (event) => {
                if (event.key == "Escape") {
                    closeModal(el);
                }
            });

            el.addEventListener("click", (event) => {
                if (typeof event.target.dataset.close != "undefined") {
                    closeModal(el);
                }
            });
        });
    }

    function closeModal(modal) {
        const form = modal.querySelector("form");
        if (form) {
            form.reset();
        }
        modal.setAttribute("hidden", "");
        document.body.classList.remove("overflow-hidden");
    }


});
