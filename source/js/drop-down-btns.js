'use strict';

(function () {
  const scrollBtn = document.querySelector('.scroll-top');
  const scrollBtnActive = 'scroll-top-active';

  const callbackBtn = document.querySelector('.callback');
  const callbackBtnActive = 'callback-active';

  const headerAux = document.querySelector('[data-type="header-slide-down"]');
  const headerAuxActive = 'header-aux-active';

  function toggleElement (element, classActive, scrollDistance) {
    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop >= scrollDistance) {
        element.classList.add(classActive);
      }
      if (document.documentElement.scrollTop < scrollDistance) {
        element.classList.remove(classActive);
      }
    });
  }

  toggleElement(scrollBtn, scrollBtnActive, 250);
  toggleElement(callbackBtn, callbackBtnActive, 350);

  if (headerAux) {
    toggleElement(headerAux, headerAuxActive, 250);
  }

})();
