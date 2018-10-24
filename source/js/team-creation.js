'use strict';

(function () {
  let team = document.querySelector('.team__list');

  let template = document.querySelector('#team-item').content.querySelector('li');

  for (let i = 0; i < teamMembers.length; i++) {
    let element = template.cloneNode(true);
    element.querySelector('.team__name').textContent = teamMembers[i].name;
    element.querySelector('.team__family').textContent = teamMembers[i].family;
    element.querySelector('.team__img').src = teamMembers[i].photo;
    team.appendChild(element);
  }
})();
