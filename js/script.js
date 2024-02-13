const selectedItems = document.querySelectorAll('.selected__item');

selectedItems.forEach(item => {
  const design = item.querySelector('.selected__design');
  const develop = item.querySelector('.selected__develop');

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
});
