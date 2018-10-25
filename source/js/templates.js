'use strict';

(function () {
  function templateTeam () {
    let team = document.querySelector('.team__list');
    let template = document.querySelector('#team-item').content.querySelector('li');

    for (let i = 0; i < teamMembers.length; i++) {
      let element = template.cloneNode(true);
      element.querySelector('.team__name').textContent = teamMembers[i].name;
      element.querySelector('.team__family').textContent = teamMembers[i].family;
      element.querySelector('.team__img').src = teamMembers[i].photo;
      team.appendChild(element);
    }
  }

  function templateClients () {
    let clients = document.querySelector('.clients__list');
    let template = document.querySelector('#clients-item').content.querySelector('li');

    for (let i = 0; i < clientsArray.length; i++) {
      let element = template.cloneNode(true);
      let image = element.querySelector('img');
      image.src = clientsArray[i];
      clients.appendChild(element);
    }
  }

  templateTeam();
  templateClients();
})();
