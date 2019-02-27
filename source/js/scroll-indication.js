(function () {
  'use strict';

  let indicateScrollStatus = new function () {
    const arrows = document.querySelectorAll('.scroll-indicator');

    function assignClasses (el) {
      el.classList.add('scroll-indicator--active', 'scroll-indicator--prev-block');
    }

    function controlArrows (parent, target) {
      target.addEventListener('scroll', function (evt) {
        let scrollSize = evt.currentTarget.scrollWidth - evt.currentTarget.offsetWidth;
        if (evt.target.scrollLeft === 0) {
          parent.classList.add('scroll-indicator--prev-block');
        } else {
          parent.classList.remove('scroll-indicator--prev-block');
        }
        if (Math.round(evt.target.scrollLeft) === Math.round(scrollSize)) {
          parent.classList.add('scroll-indicator--next-block');
        } else {
          parent.classList.remove('scroll-indicator--next-block');
        }
      });
    }

    this.checkScrollable = function () {
      window.addEventListener('load', function () {
        arrows.forEach(item => {
          if (item.children[0].scrollWidth -
            item.children[0].offsetWidth - 1 > 0) {
              assignClasses(item);
              controlArrows(item, item.children[0]);
            }
        });
      });
    }
  }

  indicateScrollStatus.checkScrollable();
})();
