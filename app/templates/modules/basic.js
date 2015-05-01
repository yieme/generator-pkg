'use strict';
/**
 * <%= moduleDesc %>
 *
 * @author     <%= author %>
 * @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 * @license    <%= license %>
 * @class
 * @param      {object} options - The options
 * @return     {object}
 */

function <%= moduleVarName %>Class(options) {
  options = options || {}
  return 'Hello, world';
}



/**
 * <%= moduleDesc %>
 *
 * @author     <%= author %>
 * @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 * @license    <%= license %>
 * @module     <%= moduleName %>
 * @param      {object} options - The options
 * @return     {object}
 */

function <%= moduleVarName %>(options) {
  return new <%= moduleVarName %>Class(options)
}


module.exports = <%= moduleVarName %>
