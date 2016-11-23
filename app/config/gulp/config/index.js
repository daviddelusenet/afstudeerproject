var config = {};

config.proxy = 'http://afstudeerproject.dev';
config.dest = 'web/static';
config.src = './';
config.jsSrc = 'app/javascript';

config.projectSrc = 'src/';
config.templates = config.projectSrc + '/**/*.html';

module.exports = config;
