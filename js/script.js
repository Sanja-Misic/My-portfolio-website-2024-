// PRELOADER
const preloader = document.querySelector('.preloader');
// console.log(preloader);

const hideloader = () => {
  preloader.classList.add('preloader-hide');
};

window.addEventListener('load', hideloader);

// SELECTED HOVER

const design = document.querySelector('.selected__design');
const develop = document.querySelector('.selected__develop');
console.log(design);

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
