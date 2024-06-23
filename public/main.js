
window.addEventListener('scroll', windowHandleScroll);
arrow.addEventListener('click', arrowHandleClick);



function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

document.getElementById('menuTrigger').addEventListener('click', toggleMenu);
document.getElementById('menuTrigger').addEventListener('click', toggleMenu); // Para ocultar el menú cuando se sale del elemento
