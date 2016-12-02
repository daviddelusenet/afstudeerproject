var Slideshow = require('./components/Slideshow');
var Sidebar = require('./components/Sidebar');

document.addEventListener('DOMContentLoaded', function () {

  var slideshows = document.querySelectorAll('.js-slideshow');
  var sidebar = document.querySelector('.js-sidebar');

  if (slideshows.length) {
    for (var i = 0; i < slideshows.length; i++) {
      new Slideshow(slideshows[i]);
    }
  }

  if (sidebar) {
    new Sidebar(sidebar);
  }

}, false);
