var path = require('path'); // https://nodejs.org/docs/latest/api/path.html
var paths = require('./'); // Requires index.js
var webpack = require('webpack');

module.exports = function (env) {

  var jsSrc = path.resolve(paths.jsSrc + '/afstudeerproject.js');
  var jsDest = paths.dest + '/js/';
  var publicPath = paths.dest + '/js/';

  var webpackConfig = {

    context: paths.jsSrc,
    plugins: [
      new webpack.ProvidePlugin({
        EH: 'ErrorHandling',
        FV: 'FormValidation'
      })
    ],
    resolve: {
      modulesDirectories: ['node_modules', 'app/javascript/mimoto/utils'],
      extensions: ['', '.js']
    },
    entry: {
      'afstudeerproject': [jsSrc]
    },
    output: {
      path: jsDest,
      filename: '[name].min.js',
      publicPath: publicPath
    }

  };

  if (env === 'development') {

    webpackConfig.devtool = 'source-map';
    webpack.debug = true

  }

  if (env === 'production') {

    webpackConfig.plugins.push(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        output: {comments: false},
        minimize: true,
        comments: false,
        sourceMap: false,
        compress:{
          loops: true,
          booleans: true,
          dead_code: true,
          conditionals: true,
          screw_ie8: true,
          comparisons: true,
          warnings: true,
          drop_console: true,
          global_defs: { DEBUG: false }
        }
      })
    );

  }

  return webpackConfig;

};
