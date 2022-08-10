// Owl Carousel
const owl = $('.owl-carousel');

owl.owlCarousel(
{
  center: true,
  loop: true,
  margin: 30,
  startPosition: 1,
  items: 3,
  responsive : {
    0 : {
      margin: 20,
      items: 1,
      center: false,
    },
    600 : {
      margin: 20,
      items: 3,
      center: true,
    },
    1150 : {
      margin: 30,
    },
  },
});



$('.slider__button--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__button--next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Header Navigation Button
const nav_button = document.querySelector('.nav__toggle');
const menu_icon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

nav_button.onclick = function(){
  nav.classList.toggle('nav--mobile');
  menu_icon.classList.toggle('menu-icon--active');
  document.body.classList.toggle('no-scroll');
}
