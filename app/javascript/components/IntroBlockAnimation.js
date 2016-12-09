'use strict';

require('gsap');

module.exports = function (element) {

  this.el = element;
  this.init();

};

module.exports.prototype = {

  init: function () {

    console.log("Init intro block animation");

    this.setVariables();
    this.initAnimation();

  },

  setVariables: function () {

    this.dividers = this.el.querySelectorAll('.js-intro-block-divider');
    this.logo = this.el.querySelectorAll('.js-intro-block-logo');
    this.title = this.el.querySelectorAll('.js-intro-block-title');
    this.list = this.el.querySelectorAll('.js-intro-block-list');

  },

  initAnimation: function () {

    var timeline = new TimelineMax();

    timeline
      .set(this.dividers, {
        width: 0
      })
      .set([this.title, this.list], {
        opacity: 0
      })
      .set(this.list, {
        bottom: -10
      })
      .set(this.logo, {
        position: 'relative',
        top: '-1000px'
      })
      .to(this.el, 0.5, {
        opacity: 1,
        ease: Quad.easeInOut
      })
      .to(this.logo, 0.8, {
        top: 0,
        ease: Quad.easeInOut
      })
      .to(this.dividers, 0.4, {
        width: '100%',
        ease: Quad.easeInOut
      })
      .to(this.title, 0.3, {
        opacity: 1,
        ease: Quad.easeInOut
      }, '-=0.1')
      .to(this.list, 0.3, {
        opacity: 1,
        bottom: 0,
        ease: Quad.easeInOut
      }, '-=0.2');

  }

};
