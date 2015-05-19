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
  return require('middle-server')(options)
}

module.exports = <%= moduleVarName %>
module.exports.server = server
