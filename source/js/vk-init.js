'use strict';

if (window.matchMedia('screen and (min-width: 720px)').matches) {
  window.vkAsyncInit = function() {
    VK.Widgets.Group("vk_groups", {mode: 3, no_cover: 1, color3: '005856', width: 328}, 45750738);
  };
}
