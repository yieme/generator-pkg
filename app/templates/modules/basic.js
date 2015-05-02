/** <%= moduleDesc %>
 *
 *  @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 *  @module     <%= moduleName %>
 */
 'use strict';
/** <%= moduleNameHuman %>
 *  @class
 *  @param      {object} options - The options
 *  @return     {object}
 */
function <%= moduleVarName %>Class(options) {
  /*jshint validthis: true */
  options = options || {}
  this.value = 'Hello, world'
  return this
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
