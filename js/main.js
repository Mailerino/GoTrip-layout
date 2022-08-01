const owl = $('.owl-carousel');

owl.owlCarousel(
  {
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
  }
);

$('.slider__button--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__button--next').click(function() {
    owl.trigger('next.owl.carousel');
})
