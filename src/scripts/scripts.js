import icon_menu_button_opening from 'url:../images/menu-button-opening.svg';
import icon_menu_button_closing from 'url:../images/menu-button-closing.svg';

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
  menu_button.style.background = `url('${icon_menu_button_opening}')`;
}

function showMenu() {
  const header_nav = document.querySelector('header > nav');
  const menu_button = document.querySelector('#menu-button');
  header_nav.style.display = 'block';
  menu_button.style.background = `url('${icon_menu_button_closing}')`;
}

window.toggleMenu = function () {
  const header_nav = document.querySelector('header > nav');

  if (header_nav.style.display === 'block') {
    hideMenu();
  } else {
    showMenu();
  }
}
