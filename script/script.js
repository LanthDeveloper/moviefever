// NAV
const navToggle = document.getElementById("nav_stack");
const navMenu = document.getElementById("nav_box__menu");
const navConfig = document.getElementById("nav_box__config");

// Obtener los elementos li originales del nav_menu
const originalNavMenuItems = Array.from(navMenu.children);

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  if (navMenu.classList.contains("show")) {
    // Agregar los elementos li de config_menu al nav_menu
    const navConfigItems = navConfig.cloneNode(true).children;
    navMenu.append(...navConfigItems);
  } else {
    // Eliminar solo los elementos li clonados del nav_menu
    const allNavMenuItems = Array.from(navMenu.children);
    const clonedItems = allNavMenuItems.filter(item => !originalNavMenuItems.includes(item));
    clonedItems.forEach(item => item.remove());
  }
});


//LI se pinte de acuerdo a la ruta actual
// Obtener la ruta actual de la página
const currentPath = window.location.pathname;

// Obtener todos los enlaces de navegación
const navLinks = document.querySelectorAll('#nav_box__menu a');

// Remover la clase 'active' de todos los enlaces
navLinks.forEach(link => {
  link.parentElement.classList.remove('active');
});

// Recorrer los enlaces y agregar la clase 'active' al correspondiente
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.parentElement.classList.add('active');
  }
});




//NAV_SCROLL
window.addEventListener('scroll', function() {;

  const scrollPosition = window.scrollY;

  const nav_container = document.getElementById('nav_container');

  const body = document.getElementById('body');
  const bodyHeight = body.offsetHeight;
  const promPercentOfBodyHeight = 0.1 * bodyHeight;

  if (scrollPosition >= promPercentOfBodyHeight) {
    nav_container.classList.add('visible');
    nav_container.classList.remove('hidden');
    nav_container.classList.add('fixed');
    nav_container.style.backgroundColor = 'black'
  } else {
    nav_container.classList.remove('fixed');
    nav_container.classList.add('visible');
    nav_container.classList.remove('hidden');
    nav_container.style.backgroundColor = 'transparent'
  }
});


//MOVIE_C2
const btn_season2 = document.getElementById('btn_season2');
const episodes_s2 = document.getElementById('episodes_s2');
const btn_season1 = document.getElementById('btn_season1');
const episodes_s1 = document.getElementById('episodes_s1');

// Establecer inicialmente el valor de display como 'none'
episodes_s1.style.display = 'none';
episodes_s2.style.display = 'block';

btn_season1.addEventListener('click', () => {
    if (episodes_s1.style.display === 'none') {
      episodes_s1.style.display = 'block';
    } else {
      episodes_s1.style.display = 'none';
    }
});

btn_season2.addEventListener('click', () => {
  if (episodes_s2.style.display === 'none') {
    episodes_s2.style.display = 'block';
  } else {
    episodes_s2.style.display = 'none';
  }
});


