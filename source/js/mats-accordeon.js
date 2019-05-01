(function () {
  'use strict'

  let accordeon = new function () {
    const keys = document.querySelectorAll('.mats__item--accordeon');
    const content = document.querySelector('.mats__accordeon');
    const values = document.querySelectorAll('.mats__content');

    function resetAll () {
      keys.forEach(key => {
        key.classList.remove('mats__item--selected');
      })
      values.forEach(item => {
        item.style = 'display: none';
      })
    }

    function switchPannels () {
      keys.forEach(key => {
        key.addEventListener('click', function () {
          resetAll();
          key.classList.add('mats__item--selected');
          let target = key.querySelector('.mats__link').dataset.target;
          content.querySelector('.' + target).style = 'display: block';
        })
      })
    }

    function initialState () {
      resetAll();
      keys[0].classList.add('mats__item--selected')
      content.querySelector('.mats__content').style = 'display: block';
    }

    initialState();
    switchPannels();
  }
})();
