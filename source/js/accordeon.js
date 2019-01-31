'use strict';

(function () {
  function Accordeon () {
    let info = document.querySelector('.info');
    let keys = info.querySelectorAll('.info__key');
    let values = info.querySelectorAll('.info__value');

    let mobile = window.matchMedia('(max-width: 767px)');

    function resetValues () {
      values.forEach(item => {
        item.classList.remove('info__value--active');
      });
    }

    function showActive (item, index) {
      function toggleActive () {
        values[index].classList.toggle('info__value--active');
        if (item.checked) {
          item.checked = false
        } else item.checked = true;
      }

      if (item.checked) {
        values[index].classList.add('info__value--active');

        if (mobile.matches) {
          let keysContainer = document.querySelector('.info__keys');
          keysContainer.insertBefore(values[index], keys[index + 1]);

          item.addEventListener('click', toggleActive);
        }
      }
    }

    function setupDefault () {
      if (mobile.matches) {
        let checkedKey = document.querySelector('.info__key[checked]');
        checkedKey.checked = false;
      }
      keys.forEach((item, index) => {
        showActive(item, index);
      });
    }

    this.operation = function () {
      setupDefault();

      keys.forEach((item, index) => {
        item.addEventListener('click', function () {
          resetValues();
          showActive(item, index);
        });
      });
    }
  }

  let accordeonMain = new Accordeon;

  accordeonMain.operation();
})();
