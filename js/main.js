const body = document.querySelector('body');
const headerElement = document.querySelector('header');
const mainElement = document.querySelector('.main');
const burgerMenu = document.querySelector('.nav__list--burger-menu');
const burgerMenuLink = burgerMenu.querySelectorAll('.nav__item > .nav__link');
const navButton = document.querySelector('.nav__button');
const reserveElement = document.querySelector('#reserve');
const advantagesElement = document.querySelector('#advantages');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    headerElement.classList.add('header--sticky');
    reserveElement.style.paddingTop = '200px';
  } else {
    mainElement.style.marginTop = '0';
    headerElement.classList.remove('header--sticky');
    reserveElement.style.paddingTop = '0';
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

burgerMenuLink.forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.toggle('hidden');
    navButton.classList.toggle('close');
    navButton.classList.toggle('open');
    burgerMenu.classList.toggle('open');
  })
})
