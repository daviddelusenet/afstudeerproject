var Slideshow = require('./components/Slideshow');
var Sidebar = require('./components/Sidebar');
var IntroBlockAnimation = require('./components/IntroBlockAnimation');

// Mimoto views
var FormView = require('./mimoto/views/form-components/Form');
var ExampleView = require('./mimoto/views/Example');
var ListView = require('./mimoto/views/form-components/List');

document.addEventListener('DOMContentLoaded', function () {

  var slideshows = document.querySelectorAll('.js-slideshow');
  var sidebar = document.querySelector('.js-sidebar');
  var introBlock = document.querySelector('.js-intro-block');

  if (slideshows.length)
    for (var i = 0; i < slideshows.length; i++)
      new Slideshow(slideshows[i]);

  if (sidebar) new Sidebar(sidebar);

  if (introBlock) new IntroBlockAnimation(introBlock);

  // Mimoto examples
  var forms = document.querySelectorAll('.js-form');
  var examples = document.querySelectorAll('.js-example');
  var lists = document.querySelectorAll('.js-list');

  EH.init({
    "errorElement": "p",
    "errorElementClasses": ["MimotoCMS_forms_FormComponent-element-error"],
    "iconSelectorClass": "js-error-icon",
    "validatedClass": "MimotoCMS_forms_FormComponent--is-validated",
    "validatedIcon": "#ico-checkmark",
    "validatedIconClass": "MimotoCMS_forms_FormComponent-title-icon--checkmark",
    "errorParentClass": "js-error-parent",
    "errorClass": "MimotoCMS_forms_FormComponent--has-error",
    "errorIcon": "#ico-warning",
    "errorIconClass": "MimotoCMS_forms_FormComponent-title-icon--warning"
  });

  for (i = 0; i < forms.length; i++) {
    new FormView(forms[i]);
  }

  for (i = 0; i < examples.length; i++) {
    new ExampleView(examples[i]);
  }

  for (i = 0; i < lists.length; i++) {
    new ListView(lists[i]);
  }


}, false);
