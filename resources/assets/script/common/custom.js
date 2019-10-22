$(".section-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true
});

$(".banner-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true
});

$(".inner-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="far fa-angle-left"></button>',
  nextArrow: '<button class="far fa-angle-right"></button>',
  autoplay: false
});
