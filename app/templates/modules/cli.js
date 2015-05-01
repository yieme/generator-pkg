#!/usr/local/bin/node
'use strict';
/**
 * <%= moduleDesc %>
 *
 * @author     <%= author %>
 * @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 * @license    <%= license %>
 * @module     <%= moduleName %>
 * @param      {stream} stdin  - Standard input
 * @return     {stream} stdout - Standard output
 */

var stdin = require('get-stdin')
var <%= moduleVarName %> = require('../index.js')

stdin(function (data) {
  if (data) {
    var result = <%= moduleVarName %>(data)
    console.log(JSON.stringify(result))
  }
})
