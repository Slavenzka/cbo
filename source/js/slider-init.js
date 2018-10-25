'use strict';

(function () {
  $(document).ready(function(){
    $('.slider__list').slick({
      fade: true,
      dots: true,
      speed: 500
    });
  });

  $(document).ready(function(){
    $('.team__list').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.clients__list').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1139,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.reviews__list').slick({
      speed: 500,
      adaptiveHeight: true,
      dots: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false
          }
        }
      ]
    });
  });
})();
