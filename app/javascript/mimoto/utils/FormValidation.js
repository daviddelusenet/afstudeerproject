'use strict';

module.exports = {

  setVariables: function (element) {

    this.el = element;
    this.value = '';
    this.checked = 0;

    this.textline = this.el.querySelector('.js-textline');
    this.textblock = this.el.querySelector('.js-textblock');
    this.checkboxes = this.el.querySelectorAll('.js-checkbox');
    this.radioButtons = this.el.querySelectorAll('.js-radio-button');
    this.dropdown = this.el.querySelector('.js-dropdown');

    if (this.textline) {
      this.input = this.textline;
      this.value = this.input.value;
    } else if (this.checkboxes.length) {
      this.input = this.checkboxes[0];
      this.countChecked(this.checkboxes);
    } else if (this.radioButtons.length) {
      this.input = this.radioButtons[0];
      this.countChecked(this.radioButtons);
    } else if (this.dropdown) {
      this.input = this.dropdown;
      this.value = this.dropdown.value;
    } else if (this.textblock) {
        this.input = this.textblock;
        this.value = this.textblock.value;
    }

  },

  setInputOptions: function () {

    this.required = this.input.hasAttribute('data-fv-required');
    this.minLength = this.input.getAttribute('data-fv-min-length');
    this.maxLength = this.input.getAttribute('data-fv-max-length');
    this.noNumbers = this.input.hasAttribute('data-fv-no-numbers');
    this.minNumbers = this.input.getAttribute('data-fv-min-numbers');
    this.maxNumbers = this.input.getAttribute('data-fv-max-numbers');
    this.noSpecialCharacters = this.input.hasAttribute('data-fv-no-special-characters');
    this.minSpecialCharacters = this.input.getAttribute('data-fv-min-special-characters');
    this.maxSpecialCharacters = this.input.getAttribute('data-fv-max-special-characters');
    this.minChecked = this.input.getAttribute('data-fv-min-checked');
    this.maxChecked = this.input.getAttribute('data-fv-max-checked');
    this.customRegex = this.input.getAttribute('data-fv-regex');
    this.errorMessage = this.input.getAttribute('data-fv-error-message');

    this.setValidationOptions();

  },

  setValidationOptions: function () {

    this.validateRequired = this.required ? true : false;
    this.validateMinLength = this.minLength ? true : false;
    this.validateMaxLength = this.maxLength ? true : false;
    this.validateNoNumbers = this.noNumbers ? true : false;
    this.validateMinNumbers = this.minNumbers ? true : false;
    this.validateMaxNumbers = this.maxNumbers ? true : false;
    this.validateNoSpecialCharacters = this.noSpecialCharacters ? true : false;
    this.validateMinSpecialCharacters = this.minSpecialCharacters ? true : false;
    this.validateMaxSpecialCharacters = this.maxSpecialCharacters ? true : false;
    this.validateMinChecked = this.minChecked ? true : false;
    this.validateMaxChecked = this.maxChecked ? true : false;
    this.validateCustomRegex = this.customRegex ? true : false;

  },

  setResult: function (passed, message) {

    this.result = {};

    this.result.passed = passed;

    if (message) {
      this.result.message = this.errorMessage ? this.errorMessage : message;
    }

  },

  validateInput: function (element) {

    this.setVariables(element);
    this.setInputOptions();
    this.setResult(true);
    this.handleValidation();

    return this.result;

  },

  handleValidation: function () {

    if (this.validateRequired) this.checkValue();
    if (this.validateMinLength) this.checkMinLength();
    if (this.validateMaxLength) this.checkMaxLength();
    if (this.validateNoNumbers) this.checkNoNumbers();
    if (this.validateMinNumbers) this.checkMinNumbers();
    if (this.validateMaxNumbers) this.checkMaxNumbers();
    if (this.validateNoSpecialCharacters) this.checkNoSpecialCharacters();
    if (this.validateMinSpecialCharacters) this.checkMinSpecialCharacters();
    if (this.validateMaxSpecialCharacters) this.checkMaxSpecialCharacters();
    if (this.validateMinChecked) this.checkMinChecked();
    if (this.validateMaxChecked) this.checkMaxChecked();
    if (this.validateCustomRegex) this.checkCustomRegex();

    this.result.passed ? EH.addValidatedState(this.el) : EH.addErrorState(this.el, this.result.message);

  },

  countChecked: function (inputs) {

    var checked = 0;

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) checked++;
    }

    return this.checked = checked;

  },

  checkValue: function () {

    if (this.value == '' && this.checked == 0) this.setResult(false, "This field is required");

  },

  checkMinLength: function () {

    if (this.value.length < this.minLength) this.setResult(false, "Input should be minimal " + this.minLength + " characters long.");

  },

  checkMaxLength: function () {

    if (this.value.length > this.maxLength) this.setResult(false, "Input can't be longer than " + this.maxLength + " characters.");

  },

  checkNoNumbers: function () {

    var regex = new RegExp("\\d");

    if (regex.test(this.value)) this.setResult(false, "No numbers allowed.");

  },

  checkMinNumbers: function () {

    var regex = new RegExp("([^\\d]*\\d){" + this.minNumbers + ",}");

    if (!regex.test(this.value)) this.setResult(false, "Input should contain a minimum of " + this.minNumbers + " number(s).");

  },

  checkMaxNumbers: function () {

    var regex = new RegExp("([^\\d]*\\d){" + (Number(this.maxNumbers) + 1) + ",}");

    if (regex.test(this.value)) this.setResult(false, "Input can't contain more than " + this.maxNumbers + " numbers.");

  },

  checkNoSpecialCharacters: function () {

    var regex = new RegExp("^[\\w]*$");

    if (!regex.test(this.value)) this.setResult(false, "Input can't contain special characters (except for underscores).");

  },

  checkMinSpecialCharacters: function () {

    var regex = new RegExp("([\\w]*\\W){" + this.minSpecialCharacters + ",}");

    if (!regex.test(this.value)) this.setResult(false, "Input should contain a minimum of " + this.minSpecialCharacters + " special character(s).");

  },

  checkMaxSpecialCharacters: function () {

    var regex = new RegExp("([\\w]*\\W){" + (Number(this.maxSpecialCharacters) + 1) + ",}");

    if (regex.test(this.value)) this.setResult(false, "Input can't contain more than " + this.maxSpecialCharacters + " special character(s).");

  },

  checkMinChecked: function () {

    if (this.checked < this.minChecked) this.setResult(false, "You need to check at least " + this.minChecked + " checkbox(es).");

  },

  checkMaxChecked: function () {

    if (this.checked > this.maxChecked) this.setResult(false, "You can't check more than " + this.maxChecked + " checkbox(es).");

  },

  checkCustomRegex: function () {

    var regex = new RegExp(this.customRegex);

    if (!regex.test(this.value)) this.setResult(false, "Please comply to the requested format.");

  }

};
