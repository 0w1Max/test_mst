const body = document.querySelector('body');
const header = document.querySelector('header');
const burgerMenu = document.querySelector('.nav__list--burger-menu');
const navButton = document.querySelector('.nav__button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
      header.classList.add('header--sticky');
  } else {
      header.classList.remove('header--sticky');
  }
});

if (window.innerWidth < 768) {
  navButton.style.display = 'block';
  navButton.classList.add('open');
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    navButton.style.display = 'block';
    navButton.classList.add('open');
  } else {
    navButton.style.display = 'none'
    navButton.classList.remove('open');
  }
});

navButton.addEventListener('click', (event) => {
  event.preventDefault();

  body.classList.toggle('hidden');
  navButton.classList.toggle('close');
  navButton.classList.toggle('open');
  burgerMenu.classList.toggle('open');
});
