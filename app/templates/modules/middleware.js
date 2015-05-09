/** <%= moduleDesc %>
 *
 *  @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 *  @module     <%= moduleName %>
 *  @param      {Object} req - The request object
 *  @param      {Object} res - The response object
 *  @param      {Function} next - Call the next middleware
 */
(function() {
  'use strict';
  function <%= moduleVarName %>(req, res, next) {
    next()
  }


  module.exports = <%= moduleVarName %>
})();
