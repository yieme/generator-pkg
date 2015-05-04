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
