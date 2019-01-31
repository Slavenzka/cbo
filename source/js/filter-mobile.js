(function () {
  'use strict';

  let firstLevel = document.querySelector('.filter > .container');
  let secondLevel = document.querySelector('.filter__area--advanced');
  let blog = document.querySelector('.filter__area--blogz');
  let mobile = window.matchMedia('(max-width: 767px)');

  function RearrangeAccordeon (container) {
    let keys = [];
    let values = [];

    function getComponents () {
      for (let i = 0; i < container.children.length; i++) {
        if (container.children[i].tagName === 'INPUT') {
          keys.push(container.children[i]);
        }
        if (container.children[i].tagName === 'DIV') {
          values.push(container.children[i]);
        }
      }
    }

    function rearrangeElements () {
      keys.forEach((item, index) => {
        container.insertBefore(values[index], keys[index + 1]);
      });
    }

    this.adaptToMobile = function () {
      getComponents();
      rearrangeElements();
    }
  }

  if (mobile.matches) {
    if (firstLevel) {
      let catalogLowLevel = new RearrangeAccordeon(secondLevel);
      catalogLowLevel.adaptToMobile();
      let catalogTopLevel = new RearrangeAccordeon(firstLevel);
      catalogTopLevel.adaptToMobile();
    }
    if (blog) {
      let blogTopLevel = new RearrangeAccordeon(blog);
      blogTopLevel.adaptToMobile();
    }
  }
})();
