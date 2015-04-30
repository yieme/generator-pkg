#!/usr/local/bin/node

'use strict';

var stdin = require('get-stdin')
var <%= moduleVarName %> = require('../index.js')

stdin(function (data) {
  if (data) {
    var result = <%= moduleVarName %>(data)
    console.log(JSON.stringify(result))
  }
})
