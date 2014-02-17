
/*
 * GET home page.
 */

var assemble = require('assemble');
var dirname = require('dirname');
var file = require('fs-utils');
var _ = require('lodash');

exports.markdown = function (base) {
  
  var root = dirname(base);
  var layout = file.readFileSync(__dirname + '/../views/layout.hbs');

  return function(req, res, next) {
    
    var path = req.path;
    if (path === '/') {
      path = '/index.md';
    }

    if (path.indexOf('.md') === -1) {
      return res.send(file.readFileSync(__dirname + '/../public' + path));
    }

    var body = file.readFileSync(root(path));
    assemble(layout.replace(/{{>body}}/, body)).build(function (err, results) {
      if (err) {
        return res.error(err);
      }

      var content = results.components[_.keys(results.components)[0]].content;
      res.send(content);
    });
  };
};