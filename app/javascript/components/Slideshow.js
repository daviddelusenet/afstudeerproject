'use strict';

var Swiper = require('swiper');

module.exports = function (element) {

  this.el = element;
  this.init();

};

module.exports.prototype = {

  init: function () {

    console.log("Init slideshow");

    this.setVariables();
    this.initSwiper();

  },

  setVariables: function () {

  },

  initSwiper: function () {

    this.Swiper = new Swiper (this.el, {
      loop: true,
      effect: 'fade',

      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });

  }

};
