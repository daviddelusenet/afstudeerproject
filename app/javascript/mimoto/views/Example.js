'use strict';

module.exports = function (element) {

  this.el = element;
  this.init();

};

module.exports.prototype = {

  init: function () {

    console.log('Init Example');

    this.setVariables();
    this.addEventListeners();

  },

  setVariables: function () {

    this.type = this.el.getAttribute('data-example-type');
    this.formClass = '.' + this.el.getAttribute('data-form');
    this.targetClass = '.' + this.el.getAttribute('data-example-target');
    this.contentActiveClass = 'example-block-toggle-content--active';

    console.log(this.formClass);
    this.inputs = this.el.querySelectorAll('.js-input');
    this.submit = this.el.querySelector('.js-submit');
    this.form = document.querySelector(this.formClass);
    this.target = document.querySelector(this.targetClass);

    this.toggles = this.el.querySelectorAll('.js-toggle');

  },

  addEventListeners: function () {

    this.submit.addEventListener('click', this.updateTarget.bind(this));

    for (var i = 0; i < this.toggles.length; i++) {
      this.toggles[i].addEventListener('change', this.toggle.bind(this));
    }

  },

  updateTarget: function () {

    this.setOptions();
    this.removeValidation();
    this.addValidation();

  },

  setOptions: function () {

    this.options = {};
    var id;

    for (var i = 0; i < this.inputs.length; i++) {
      var type = this.inputs[i].type;
      if (type == 'checkbox') {

        if (!this.inputs[i].checked) {
          id = this.inputs[i].getAttribute('id');
          this.options[id] = '';
        }

      } else {

        var value = this.inputs[i].value;
        id = this.inputs[i].getAttribute('id');

        if (value && id) {
          this.options[id] = value;
        }

      }

    }

  },

  removeValidation: function () {

    this.target.removeAttribute('data-fv-min-length');
    this.target.removeAttribute('data-fv-max-length');
    this.target.removeAttribute('data-fv-no-numbers');
    this.target.removeAttribute('data-fv-min-numbers');
    this.target.removeAttribute('data-fv-max-numbers');
    this.target.removeAttribute('data-fv-no-special-characters');
    this.target.removeAttribute('data-fv-min-special-characters');
    this.target.removeAttribute('data-fv-max-special-characters');

  },

  addValidation: function () {

    if (this.options['no-numbers'] == '') {
      delete this.options['min-numbers'];
      delete this.options['max-numbers'];
    }

    if (this.options['no-special-characters'] == '') {
      delete this.options['min-special-characters'];
      delete this.options['max-special-characters'];
    }

    for (var key in this.options) {
      if (this.options.hasOwnProperty(key)) {
        this.target.setAttribute('data-fv-' + key, this.options[key]);
        console.log(this.target);
      }
    }

    // Create the event
    var event = new CustomEvent("validate", { "detail": "Example of an event" });

    // Dispatch/Trigger/Fire the event
    this.form.dispatchEvent(event);

  },

  toggle: function (e) {

    var target = e.currentTarget.getAttribute('data-target');
    this.el.querySelector('.' + target).classList.toggle(this.contentActiveClass);

  }

};
