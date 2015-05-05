#!/usr/local/bin/node
/** <%= moduleDesc %>
 *
 *  @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 *  @module     <%= moduleName %>
 *  @param      {stream} stdin  - Standard input
 *  @return     {stream} stdout - Standard output
 */ 'use strict';
var convar  = require('convar')
var <%= moduleVarName %> = require('../index.js')

function help() {
  var pkg = require('../package.json')
  console.error(pkg.description, '- v' + pkg.version)
  console.error('Usage:', pkg.name, '--param value')
  process.exit(1)
}

var param = convar('param')
if (!param) help()



// standard in template
var stdin   = require('get-stdin')

stdin(function (data) {
  if (data) {
    var result = <%= moduleVarName %>(data)
    console.log(JSON.stringify(result))
  }
})
