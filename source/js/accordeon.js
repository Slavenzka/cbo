'use strict';

(function () {
  let info = document.querySelector('.info');
  let keys = info.querySelectorAll('.info__key');
  let values = info.querySelectorAll('.info__value');

  function resetValues () {
    values.forEach(item => {
      item.classList.remove('info__value--active');
    });
  }

  keys.forEach((item, index) => {
    item.addEventListener('click', function () {
      resetValues();
      if (item.checked) {
        values[index].classList.add('info__value--active');
      }
    });
  })
})();
