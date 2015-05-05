/** <%= moduleDesc %>
 *
 *  @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 *  @module     <%= moduleName %>
 */
 'use strict';
 function <%= moduleErrName %>(message) {
     this.name = '<%= moduleErrName %>';
     this.message = message;
     this.stack = (new Error()).stack;
 }
 <%= moduleErrName %>.prototype = new Error;

/** <%= moduleNameHuman %>
 *  @class
 *  @param      {object} options - The options
 *  @return     {object}
 */
function <%= moduleVarName %>Class(options) {
  /*jshint validthis: true */
  var self = this
  options = options || {}
  self.value = 'Hello, world'
  return self
}



/** <%= moduleNameHuman %>
 *  @constructor
 *  @param      {object} options - The options
 *  @return     {object}
 */
function <%= moduleVarName %>(options) {
  return new <%= moduleVarName %>Class(options)
}


module.exports = <%= moduleVarName %>
