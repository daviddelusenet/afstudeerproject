'use strict';

module.exports = function (element) {

  this.el = element;
  this.init();

};

module.exports.prototype = {

  init: function () {

    console.log("Init sidebar");

    this.setVariables();
    this.addScrollEvent();
    this.onScroll();

  },

  setVariables: function () {

    this.submenuLinks = this.el.querySelectorAll('.js-submenu-link');
    this.activeClass = 'sidebar-submenu-item-link--active';
    this.isFixedClass = 'sidebar--is-fixed';
    this.intro = document.querySelector('.js-intro-block');

  },

  addScrollEvent: function () {

    window.addEventListener('scroll', this.onScroll.bind(this));

  },

  onScroll: function () {

    var scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var introHeight = this.intro.offsetHeight;

    if (scrollPos > windowHeight) {
      this.el.classList.add(this.isFixedClass);
    } else {
      this.el.classList.remove(this.isFixedClass);
    }

    for (var i = 0; i < this.submenuLinks.length; i++) {

      var currentLink = this.submenuLinks[i];
      var refElement = document.querySelector(currentLink.getAttribute('href'));

      if (refElement) {

        if ((refElement.offsetTop + introHeight - 1) <= scrollPos && (refElement.offsetTop + refElement.offsetHeight + introHeight) > scrollPos) {

          this.removeActiveClasses();
          currentLink.classList.add(this.activeClass);

        } else {

          currentLink.classList.remove(this.activeClass);

        }

      }

    }

  },

  removeActiveClasses: function () {

    for (var i = 0; i < this.submenuLinks.length; i++) {

      this.submenuLinks[i].classList.remove(this.activeClass);

    }

  }

};
