var path = require('path');

var root = path.join(__dirname, '/');
var config = {
  context:  root,
  entry: [
    './index.js',
  ],
  output: {
    path: root,
    filename: 'index.min.js'
  }
};

module.exports = config;
