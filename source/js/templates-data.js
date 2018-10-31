'use strict';

  let teamMembers = [
    {
      name: 'Евгений',
      family: 'Доценко',
      photo: 'img/index__team-item--2.png'
    },
    {
      name: 'Александр',
      family: 'Медведев',
      photo: 'img/index__team-item--3.png'
    },
    {
      name: 'Игорь',
      family: 'Гейц',
      photo: 'img/index__team-item--4.png'
    },
    {
      name: 'Тимур',
      family: 'Кармазин',
      photo: 'img/index__team-item--5.png'
    },
    {
      name: 'Мария',
      family: 'Попова',
      photo: 'img/index__team-item--6.png'
    },
    {
      name: 'Вадим',
      family: 'Куценко',
      photo: 'img/index__team-item--7.png'
    },
    {
      name: 'Тони',
      family: 'Роббинс',
      photo: 'img/index__team-item--8.png'
    },
    {
      name: 'Алексей',
      family: 'Щавелев',
      photo: 'img/index__team-item--9.png'
    },
    {
      name: 'Глеб',
      family: 'Архангельский',
      photo: 'img/index__team-item--10.png'
    },
    {
      name: 'Наталия',
      family: 'Сафонова',
      photo: 'img/index__team-item--11.png'
    },
    {
      name: 'Михаил',
      family: 'Дегтярев',
      photo: 'img/index__team-item--12.jpg'
    },
    {
      name: 'Игорь',
      family: 'Манн',
      photo: 'img/index__team-item--13.png'
    },
    {
      name: 'Марк',
      family: 'Пальчик',
      photo: 'img/index__team-item--14.png'
    },
    {
      name: 'Сергей',
      family: 'Макшанов',
      photo: 'img/index__team-item--15.png'
    },
    {
      name: 'Михаил',
      family: 'Хазин',
      photo: 'img/index__team-item--16.png'
    },
    {
      name: 'Сергей',
      family: 'Гришин',
      photo: 'img/index__team-item--17.png'
    },
    {
      name: 'Радислав',
      family: 'Гандапас',
      photo: 'img/index__team-item--18.png'
    },
    {
      name: 'Евгений',
      family: 'Бойченко',
      photo: 'img/index__team-item--19.png'
    },
    {
      name: 'Татьяна',
      family: 'Михеева',
      photo: 'img/index__team-item--20.png'
    },
    {
      name: 'Светлана',
      family: 'Головина',
      photo: 'img/index__team-item--21.png'
    },
    {
      name: 'Надежда',
      family: 'Чамкина',
      photo: 'img/index__team-item--22.png'
    },
    {
      name: 'Михаил',
      family: 'Делягин',
      photo: 'img/index__team-item--23.png'
    },
    {
      name: 'Эмма',
      family: 'Форштретер',
      photo: 'img/index__team-item--24.png'
    },
    {
      name: 'Александр',
      family: 'Сазанович',
      photo: 'img/index__team-item--25.png'
    },
    {
      name: 'Александр',
      family: 'Сергеев',
      photo: 'img/index__team-item--26.png'
    },
    {
      name: 'Светлана',
      family: 'Гончарова',
      photo: 'img/index__team-item--27.png'
    },
    {
      name: 'Лариса',
      family: 'Косарезова',
      photo: 'img/index__team-item--28.png'
    },
    {
      name: 'Мария',
      family: 'Землянухина',
      photo: 'img/index__team-item--29.png'
    },
    {
      name: 'Лилия',
      family: 'Патрушева',
      photo: 'img/index__team-item--30.png'
    },
    {
      name: 'Алексей',
      family: 'Капуста',
      photo: 'img/index__team-item--31.png'
    },
    {
      name: 'Зоя',
      family: 'Стрелкова',
      photo: 'img/index__team-item--32.png'
    },
    {
      name: 'Игорь',
      family: 'Рызов',
      photo: 'img/index__team-item--33.png'
    },
    {
      name: 'Андрей',
      family: 'Нахратов',
      photo: 'img/index__team-item--34.png'
    },
    {
      name: 'Ольга',
      family: 'Антошина',
      photo: 'img/index__team-item--35.png'
    },
  ];

  let clientsArray = [
    'img/index__clients-item-logo--1.jpg',
    'img/index__clients-item-logo--2.jpg',
    'img/index__clients-item-logo--3.jpg',
    'img/index__clients-item-logo--4.jpg',
    'img/index__clients-item-logo--5.jpg',
    'img/index__clients-item-logo--6.jpg',
    'img/index__clients-item-logo--7.jpg',
    'img/index__clients-item-logo--8.jpg',
    'img/index__clients-item-logo--9.png',
    'img/index__clients-item-logo--10.jpg',
    'img/index__clients-item-logo--11.jpg',
    'img/index__clients-item-logo--12.jpg',
    'img/index__clients-item-logo--13.jpg',
    'img/index__clients-item-logo--14.jpg',
    'img/index__clients-item-logo--15.gif',
    'img/index__clients-item-logo--16.jpg',
    'img/index__clients-item-logo--17.jpg',
    'img/index__clients-item-logo--18.jpg',
    'img/index__clients-item-logo--19.jpeg',
    'img/index__clients-item-logo--20.jpg',
    'img/index__clients-item-logo--21.jpg',
    'img/index__clients-item-logo--22.jpg',
    'img/index__clients-item-logo--23.jpg',
    'img/index__clients-item-logo--24.jpeg',
    'img/index__clients-item-logo--25.jpeg',
    'img/index__clients-item-logo--26.jpg',
    'img/index__clients-item-logo--27.jpg',
    'img/index__clients-item-logo--28.jpg',
    'img/index__clients-item-logo--29.jpg',
    'img/index__clients-item-logo--30.jpg',
    'img/index__clients-item-logo--31.jpg',
    'img/index__clients-item-logo--32.png',
    'img/index__clients-item-logo--33.jpg',
    'img/index__clients-item-logo--34.jpg',
    'img/index__clients-item-logo--35.jpg'
  ];
