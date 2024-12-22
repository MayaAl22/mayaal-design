const header_nav = document.querySelector('header > nav');

window.onload = function() {
  if (window.innerWidth < 1133) {
    hideMenu();
  }
};

window.addEventListener('resize',
  () => {
    if (window.innerWidth < 1133) {
      hideMenu();
    } else {
      showMenu();
    }
  }
);

function hideMenu() {
  const header_nav = document.querySelector('header > nav');
  const menu_button = document.querySelector('#menu-button');
  header_nav.style.display = 'none';
  menu_button.style.background = 'url("/static/images/menu-button-opening.svg")';
}

function showMenu() {
  const header_nav = document.querySelector('header > nav');
  const menu_button = document.querySelector('#menu-button');
  header_nav.style.display = 'block';
  menu_button.style.background = 'url("/static/images/menu-button-closing.svg")';
}

function toggleMenu() {
  const header_nav = document.querySelector('header > nav');

  if (header_nav.style.display === 'block') {
    hideMenu();
  } else {
    showMenu();
  }
}
