const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const card = document.querySelector('.card');
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
  card.classList.toggle('show-menu');
})

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('show');
  searchIcon.classList.toggle('color');
})