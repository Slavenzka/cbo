'use strict';

(function () {
  let scrollBtn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= 250) {
      scrollBtn.classList.add('scroll-top-active');
    }
    if (document.documentElement.scrollTop < 250) {
      scrollBtn.classList.remove('scroll-top-active');
    }
  });

  scrollBtn.addEventListener('click', function (evt) {
    document.documentElement.style.scrollBehavior = 'smooth';
  });
})();
