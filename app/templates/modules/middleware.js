/** <%= moduleDesc %>
 *
 *  @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 *  @module     <%= moduleName %>
 */
'use strict';

function <%= moduleVarName %>(req, res, next) {
  console.log(req.url)
  next()
}


function server(options) {
  options     = options || { }
  var express = require('express')
  var app     = express()
  var port    = options.port || 3000
  var pkg     = require('./package.json')

  app.use(<%= moduleVarName %>)
  app.get('/', function(req, res){
    res.send('OK');
  })

  app.listen(port)
  console.log(pkg.name + '@' + pkg.version, 'listening on', port)
}

module.exports = <%= moduleVarName %>
module.exports.server = server
