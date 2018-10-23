'use strict';

(function () {
  let nav = document.querySelector('.navigation');
  let menu = nav.querySelector('.navigation__item--menu');
  let linkMenu = 'navigation__link--menu';
  let city = nav.querySelector('.navigation__item--city');
  let linkCity = 'navigation__link--city';

  function removeHoover (item) {
    item.classList.remove('navigation-hover');
    item.classList.add('navigation-nohover');
  }

  function addHoover (item) {
    item.classList.remove('navigation-nohover');
    item.classList.add('navigation-hover');
  }

  function submenuToggle (evt, navItem, navLinkClass) {
    if (!evt.target.classList.contains(navLinkClass)) {
      if (navItem.classList.contains('navigation-hover')) {
        removeHoover(navItem);
      }
      if (navItem.classList.contains('navigation__item--selected')) {
        navItem.classList.remove('navigation__item--selected');
      }
    } else if ((evt.target.classList.contains(navLinkClass)) &&
    navItem.classList.contains('navigation__item--selected')) {
    removeHoover(navItem);
      navItem.classList.remove('navigation__item--selected');
    } else {
      navItem.classList.add('navigation__item--selected');
      addHoover(navItem);
    }
  }

  document.addEventListener('click', function (evt) {
    submenuToggle(evt, menu, linkMenu);
    submenuToggle(evt, city, linkCity);
  })
})();
