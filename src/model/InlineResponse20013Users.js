/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse20013AccountInformation', 'model/InlineResponse20013ContactInformation', 'model/InlineResponse20013OrganizationInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20013AccountInformation'), require('./InlineResponse20013ContactInformation'), require('./InlineResponse20013OrganizationInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse20013Users = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse20013AccountInformation, root.CyberSource.InlineResponse20013ContactInformation, root.CyberSource.InlineResponse20013OrganizationInformation);
  }
}(this, function(ApiClient, InlineResponse20013AccountInformation, InlineResponse20013ContactInformation, InlineResponse20013OrganizationInformation) {
  'use strict';




  /**
   * The InlineResponse20013Users model module.
   * @module model/InlineResponse20013Users
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse20013Users</code>.
   * @alias module:model/InlineResponse20013Users
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse20013Users</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20013Users} obj Optional instance to populate.
   * @return {module:model/InlineResponse20013Users} The populated <code>InlineResponse20013Users</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountInformation')) {
        obj['accountInformation'] = InlineResponse20013AccountInformation.constructFromObject(data['accountInformation']);
      }
      if (data.hasOwnProperty('organizationInformation')) {
        obj['organizationInformation'] = InlineResponse20013OrganizationInformation.constructFromObject(data['organizationInformation']);
      }
      if (data.hasOwnProperty('contactInformation')) {
        obj['contactInformation'] = InlineResponse20013ContactInformation.constructFromObject(data['contactInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse20013AccountInformation} accountInformation
   */
  exports.prototype['accountInformation'] = undefined;
  /**
   * @member {module:model/InlineResponse20013OrganizationInformation} organizationInformation
   */
  exports.prototype['organizationInformation'] = undefined;
  /**
   * @member {module:model/InlineResponse20013ContactInformation} contactInformation
   */
  exports.prototype['contactInformation'] = undefined;



  return exports;
}));


