const menuBtn = document.querySelector('.ham-menu');
const menu = document.querySelector('nav');
const body = document.querySelector('body');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('change');
    if (menu.classList.contains('change') === true) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
})