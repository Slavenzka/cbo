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

  let authorTrigger = document.querySelector('.advanced__selector--author');
  let formatTrigger = document.querySelector('.advanced__selector--format');
  let themeTrigger = document.querySelector('.advanced__selector--theme');
  let pickerTrigger = document.querySelector('.advanced__selector--start');

  function showAuthors () {
    $('.advanced__list--author').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true
    });
    authorTrigger.removeEventListener('click', showAuthors);
  }

  function showFormats () {
    $('.advanced__list--format').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true
    });
    formatTrigger.removeEventListener('click', showFormats);
  }

  function showThemes () {
    $('.advanced__list--theme').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true
    });
    themeTrigger.removeEventListener('click', showThemes);
  }

  function showPicker () {
    pickmeup('.advanced__datepicker', {
      flat  : true,
      mode  : 'range',
      prev: '',
      next: ''
    });
    pickerTrigger.removeEventListener('click', showPicker);
  }

  authorTrigger.addEventListener('click', showAuthors);
  formatTrigger.addEventListener('click', showFormats);
  themeTrigger.addEventListener('click', showThemes);
  pickerTrigger.addEventListener('click', showPicker);
})();
