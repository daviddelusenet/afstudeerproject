var Slideshow = require('./components/Slideshow');
var Sidebar = require('./components/Sidebar');
var IntroBlockAnimation = require('./components/IntroBlockAnimation');

document.addEventListener('DOMContentLoaded', function () {

  var slideshows = document.querySelectorAll('.js-slideshow');
  var sidebar = document.querySelector('.js-sidebar');
  var introBlock = document.querySelector('.js-intro-block');

  if (slideshows.length) {
    for (var i = 0; i < slideshows.length; i++) {
      new Slideshow(slideshows[i]);
    }
  }

  if (sidebar) {
    new Sidebar(sidebar);
  }

  if (introBlock) {
    new IntroBlockAnimation(introBlock);
  }

}, false);
