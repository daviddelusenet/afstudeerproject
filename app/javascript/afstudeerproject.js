var Slideshow = require('./components/Slideshow');
var Sidebar = require('./components/Sidebar');
var IntroBlockAnimation = require('./components/IntroBlockAnimation');

// Mimoto views
var FormView = require('./mimoto/views/form-components/Form');
var ExampleTextline = require('./mimoto/examples/ExampleTextline');

document.addEventListener('DOMContentLoaded', function () {

  var slideshows = document.querySelectorAll('.js-slideshow');
  var sidebar = document.querySelector('.js-sidebar');
  var introBlock = document.querySelector('.js-intro-block');

  if (slideshows.length) {
    for (var i = 0; i < slideshows.length; i++) {
      new Slideshow(slideshows[i]);
    }
  }

  if (sidebar) new Sidebar(sidebar);

  if (introBlock) new IntroBlockAnimation(introBlock);

  // Mimoto examples
  var forms = document.querySelectorAll('.js-form');
  var exampleTextline = document.querySelector('.js-example-textline');

  EH.init({
    "element": "p",
    "classes": ["MimotoCMS_forms_FormComponent-element-error"],
    "errorClass": "MimotoCMS_forms_FormComponent--has-error",
    "validatedClass": "MimotoCMS_forms_FormComponent--is-validated",
    "iconSelectorClass": "js-error-icon",
    "iconErrorClass": "MimotoCMS_forms_FormComponent-title-icon--warning",
    "iconValidatedClass": "MimotoCMS_forms_FormComponent-title-icon--checkmark"
  });

  for (i = 0; i < forms.length; i++) {
    new FormView(forms[i]);
  }

  if (exampleTextline) new ExampleTextline(exampleTextline);

}, false);
