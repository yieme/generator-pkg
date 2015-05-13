/** <%= moduleDesc %>
 *
 *  @copyright  Copyright (C) <%= year %> by <%= copyrightName %>
 *  @module     <%= moduleName %>
 */
 (function() {
  'use strict';
  var <%= moduleErrName %> = require('make-error')('<%= moduleErrName %>')

  /** <%= moduleNameHuman %>
   *  @class
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function <%= moduleVarName %>Class(options) {
    /*jshint validthis: true */
    var self = this
    options = options || {}
    self.value = options
    return self
  }



  /** <%= moduleNameHuman %>
   *  @constructor
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function <%= moduleVarName %>(options) {
    return new <%= moduleVarName %>Class(options).value
  }


  module.exports = <%= moduleVarName %>
})();
