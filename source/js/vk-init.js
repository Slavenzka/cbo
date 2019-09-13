'use strict';

// (function () {
if (window.matchMedia('screen and (min-width: 720px)').matches) {
  // VK.Widgets.Group("vk_groups", {mode: 3, no_cover: 1, color3: '005856', width: 328}, 45750738);
  //
  window.vkAsyncInit = function() {
    VK.Widgets.Group("vk_groups", {mode: 3, no_cover: 1, color3: '005856', width: 328}, 45750738); //указывается ID группы лишь потому что это пример
  };

  // setTimeout(function() {
  //   var el = document.createElement("script");
  //   el.type = "text/javascript";
  //   el.src = "https://vk.com/js/api/openapi.js?156";
  //   el.async = true;
  //   document.getElementById("vk_groups").appendChild(el);
  // }, 0);
}
// })();
