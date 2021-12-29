var path = require('path');

module.exports = {
  entry:  path.resolve(__dirname + '/dist' + '/modules' + '/actions' + '/posts.actions.js'),
  output: {
    path: path.resolve(__dirname + '/dist' + '/js'),
    filename: '_posts.actions.js'
  }
};