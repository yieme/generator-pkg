'use strict';
/**
 * <%= moduleDesc %>
 *
 * @author     <%= author %>
 * @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 * @license    <%= license %>
 * @module     <%= moduleName %>
 * @param      {Object} req - The request object
 * @param      {Object} res - The response object
 * @param      {Function} next - Call the next middleware
 */

function <%= moduleVarName %>(req, res, next) {
  next()
}


module.exports = <%= moduleVarName %>
