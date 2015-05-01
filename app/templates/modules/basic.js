/** <%= moduleDesc %>
 *
 *  @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 */
 'use strict';
/** <%= moduleNameHuman %> class
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
}



/** <%= moduleNameHuman %> factory
 *  @module     <%= moduleName %>
 *  @param      {object} options - The options
 *  @return     {object}
 */
function <%= moduleVarName %>(options) {
  return new <%= moduleVarName %>Class(options)
}


module.exports = <%= moduleVarName %>
