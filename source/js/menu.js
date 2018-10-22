'use strict';

(function () {
  let nav = document.querySelector('.navigation');
  let menu = nav.querySelector('.navigation__item--menu');
  let linkMenu = 'navigation__link--menu';
  let city = nav.querySelector('.navigation__item--city');
  let linkCity = 'navigation__link--city';

  function submenuToggle (evt, navItem, navLinkClass) {
    if (!evt.target.classList.contains(navLinkClass)) {
      if (navItem.classList.contains('navigation__item--selected')) {
        navItem.classList.remove('navigation__item--selected');
        nav.classList.remove('navigation-hover');
        nav.classList.add('navigation-nohover');
      }
    } else if ((evt.target.classList.contains(navLinkClass)) &&
  navItem.classList.contains('navigation__item--selected')) {
      nav.classList.remove('navigation-hover');
      navItem.classList.remove('navigation__item--selected');
      nav.classList.add('navigation-nohover');
    } else {
      nav.classList.add('navigation-hover');
      navItem.classList.add('navigation__item--selected');
    }
  }

  document.addEventListener('click', function (evt) {
    submenuToggle(evt, menu, linkMenu);
    submenuToggle(evt, city, linkCity);
  })
})();
