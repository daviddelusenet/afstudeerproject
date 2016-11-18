var config = require('./');

module.exports = {

  cssName: 'afstudeerproject.css',
  src: ["app/**/*.{sass,scss}"],
  dest: config.dest + "/css",
  settings: {
    outputStyle: 'compressed',
    //includePaths: ['node_modules/foundation-sites/scss'],
    indentedSyntax: true // Enable .sass syntax!
  }

};
