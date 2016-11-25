var Slideshow = require('./components/Slideshow');

document.addEventListener('DOMContentLoaded', function () {

  var slideshows = document.querySelectorAll('.js-slideshow');

  if (slideshows.length) {
    for (var i = 0; i < slideshows.length; i++) {
      new Slideshow(slideshows[i]);
    }
  }


}, false);
