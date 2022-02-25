const menu = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.sidebar')
const classes = sideMenu.classList
const hamClasses = menu.classList

menu.addEventListener('click', (e) => {
    classes.toggle('slide')
    hamClasses.toggle('slide')
})