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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse4007Fields = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse4007Fields model module.
   * @module model/InlineResponse4007Fields
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse4007Fields</code>.
   * Provide validation failed input field details
   * @alias module:model/InlineResponse4007Fields
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse4007Fields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4007Fields} obj Optional instance to populate.
   * @return {module:model/InlineResponse4007Fields} The populated <code>InlineResponse4007Fields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('localizationKey')) {
        obj['localizationKey'] = ApiClient.convertToType(data['localizationKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * Path of the failed property
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * Error description about validation failed field
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Localized Key Name
   * @member {String} localizationKey
   */
  exports.prototype['localizationKey'] = undefined;



  return exports;
}));


