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
  options = options || {}
  return 'Hello, world';
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
