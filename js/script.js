// PRELOADER
const preloader = document.querySelector('.preloader');
const html = document.querySelector('html');
const body = document.querySelector('body');

html.style.overflowY = 'hidden';
body.style.overflowY = 'hidden';

const hideloader = () => {
  preloader.classList.add('preloader-hide');
  html.style.overflowY = 'visible';
  body.style.overflowY = 'visible';
};

window.addEventListener('load', hideloader);

// NAV MOB BTN
const navMobBtn = document.querySelector('.header__mob-btn');
const navMobContainer = document.querySelector('.header__mob');
const navMobCloseBtn = document.querySelector('.header__mob-close');

navMobBtn.addEventListener('click', () => {
  navMobContainer.classList.add('header__mob--show');
});

navMobCloseBtn.addEventListener('click', () => {
  navMobContainer.classList.remove('header__mob--show');
});

//slested hover
const design1 = document.querySelector('.selected__design-1');
const develop1 = document.querySelector('.selected__develop-1');

const design2 = document.querySelector('.selected__design-2');
const develop2 = document.querySelector('.selected__develop-2');

design1.addEventListener('mouseenter', () => {
  develop1.classList.add('selected__active');
});

design1.addEventListener('mouseleave', () => {
  develop1.classList.remove('selected__active');
});

develop1.addEventListener('mouseenter', () => {
  design1.classList.add('selected__active');
});

develop1.addEventListener('mouseleave', () => {
  design1.classList.remove('selected__active');
});

design2.addEventListener('mouseenter', () => {
  develop2.classList.add('selected__active');
});

design2.addEventListener('mouseleave', () => {
  develop2.classList.remove('selected__active');
});

develop2.addEventListener('mouseenter', () => {
  design2.classList.add('selected__active');
});

develop2.addEventListener('mouseleave', () => {
  design2.classList.remove('selected__active');
});
