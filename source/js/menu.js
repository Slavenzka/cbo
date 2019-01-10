'use strict';

(function () {

  function MenuOperation () {
    this.removeHoover = function (item) {
      item.classList.remove('navigation-hover');
      item.classList.add('navigation-nohover');
    }

    this.addHoover = function (item) {
      item.classList.remove('navigation-nohover');
      item.classList.add('navigation-hover');
    }

    this.submenuToggle = function (evt, navItem, navLinkClass) {
      if (!evt.target.classList.contains(navLinkClass)) {
        if (navItem.classList.contains('navigation-hover')) {
          this.removeHoover(navItem);
        }
        if (navItem.classList.contains('navigation__item--selected')) {
          navItem.classList.remove('navigation__item--selected');
        }
      } else if ((evt.target.classList.contains(navLinkClass)) &&
      navItem.classList.contains('navigation__item--selected')) {
      this.removeHoover(navItem);
        navItem.classList.remove('navigation__item--selected');
      } else {
        navItem.classList.add('navigation__item--selected');
        this.addHoover(navItem);
      }
    }
  }

  let mainMenu = new MenuOperation;
  let nav = document.querySelector('.navigation');
  let menu = nav.querySelector('.navigation__item--menu');
  let linkMenu = 'navigation__link--menu';
  let city = nav.querySelector('.navigation__item--city');
  let linkCity = 'navigation__link--city';

  document.addEventListener('click', function (evt) {
    mainMenu.submenuToggle(evt, menu, linkMenu);
    mainMenu.submenuToggle(evt, city, linkCity);
  })
})();
