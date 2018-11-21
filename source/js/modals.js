'use strict';

(function () {
  const footer = document.querySelector('.footer');
  const modals = document.querySelectorAll('.modal');
  const triggers = document.querySelectorAll('.footer__link-service');
  const closeBtns = document.querySelectorAll('.modal__close');

  // const triggersLanding = document.querySelectorAll('.modal-trigger');

  function modalOperation (triggerSet) {
    triggerSet.forEach((item, index) => {

      function closeModal () {
        function hideModal () {
          modals[index].style.display = 'none';
          modals[index].removeEventListener('animationend', hideModal);
        }

        modals[index].classList.remove('modal-open');
        modals[index].classList.add('modal-close');
        modals[index].addEventListener('animationend', hideModal);
        closeBtns[index].removeEventListener('click', closeModal)
      }

      function closeModalEasy (evt) {
        if (evt.target.classList.contains('modal')) {
          closeModal();
          modals[index].removeEventListener('click', closeModalEasy);
        }
      }

      function openModal (evt) {
        evt.preventDefault();
        modals[index].classList.remove('modal-close');
        modals[index].style.display = 'block';
        modals[index].classList.add('modal-open');
        closeBtns[index].addEventListener('click', closeModal);
        modals[index].addEventListener('click', closeModalEasy);
      }

      item.addEventListener('click', openModal);
    });
  }

  modalOperation(triggers);

    // if (triggersLanding) {
    //   console.log(modals);
    //   modalOperation(triggersLanding);
    // }
})();
