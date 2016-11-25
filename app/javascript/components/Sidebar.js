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

  },

  addScrollEvent: function () {

    window.addEventListener('scroll', this.onScroll.bind(this));

  },

  removeScrollEvent: function () {

    window.removeEventListener('scroll', this.onScroll.bind(this));

  },

  onScroll: function () {

    var scrollPos = document.body.scrollTop || document.documentElement.scrollTop;

    for (var i = 0; i < this.submenuLinks.length; i++) {

      var currentLink = this.submenuLinks[i];
      var refElement = document.querySelector(currentLink.getAttribute('href'));

      if (refElement) {

        if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight) > scrollPos) {

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
