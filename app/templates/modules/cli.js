#!/usr/local/bin/node
/** <%= moduleDesc %>
 *
 *  @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 *  @module     <%= moduleName %>
 *  @param      {stream} stdin  - Standard input
 *  @return     {stream} stdout - Standard output
 */ 'use strict';
var stdin = require('get-stdin')
var <%= moduleVarName %> = require('../index.js')

stdin(function (data) {
  if (data) {
    var result = <%= moduleVarName %>(data)
    console.log(JSON.stringify(result))
  }
})
