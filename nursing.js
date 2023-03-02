const menu = document.querySelector('.nav-menu');
const NavMenu = document.querySelector('.menu-item');

menu.addEventListener('pointer', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})