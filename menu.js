const menuBtn = document.querySelector('.ham-menu')
const menu = document.querySelector('.nav-items')
menuBtn.addEventListener('click', () => {
    menu.classList.add('.show')
})