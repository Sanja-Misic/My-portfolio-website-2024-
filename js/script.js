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

// //HERO BUTTON - until I create a work page
// document.addEventListener('DOMContentLoaded', function () {
//   const scrollButtonHero = document.querySelector('.button-hero');

//   scrollButtonHero.addEventListener('click', function () {
//     const sectionWork = document.querySelector('.selected');
//     sectionWork.scrollIntoView({ behavior: 'smooth' });
//   });
// });
// SELECTED HOVER

const design = document.querySelector('.selected__design');
const develop = document.querySelector('.selected__develop');

design.addEventListener('mouseenter', () => {
  develop.classList.add('selected__active');
});

design.addEventListener('mouseleave', () => {
  develop.classList.remove('selected__active');
});

develop.addEventListener('mouseenter', () => {
  design.classList.add('selected__active');
});

develop.addEventListener('mouseleave', () => {
  design.classList.remove('selected__active');
});
