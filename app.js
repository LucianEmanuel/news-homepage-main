'use strict';

const hamburgerMenu = document.querySelector('.hamburger-menu');
const modal = document.querySelector('.modal');
const nav = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger-menu .show');
const hamburgerClose = document.querySelector('.hamburger-menu .close');

hamburgerMenu.addEventListener('click', showMenu);

function showMenu() {
  hamburger.classList.toggle('hidden');
  hamburgerClose.classList.toggle('hidden');

  if (hamburger.classList.contains('hidden')) {
    nav.style.right = '0';
    modal.classList.add('show-modal');
    document.body.classList.add('no-scroll');
  } else {
    nav.style.right = '-1000px';
    modal.classList.remove('show-modal');
    document.body.classList.remove('no-scroll');
  }
}
