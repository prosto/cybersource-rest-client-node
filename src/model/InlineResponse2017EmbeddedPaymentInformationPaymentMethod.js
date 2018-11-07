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
    root.CyberSource.InlineResponse2017EmbeddedPaymentInformationPaymentMethod = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2017EmbeddedPaymentInformationPaymentMethod model module.
   * @module model/InlineResponse2017EmbeddedPaymentInformationPaymentMethod
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2017EmbeddedPaymentInformationPaymentMethod</code>.
   * @alias module:model/InlineResponse2017EmbeddedPaymentInformationPaymentMethod
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse2017EmbeddedPaymentInformationPaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2017EmbeddedPaymentInformationPaymentMethod} obj Optional instance to populate.
   * @return {module:model/InlineResponse2017EmbeddedPaymentInformationPaymentMethod} The populated <code>InlineResponse2017EmbeddedPaymentInformationPaymentMethod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The description for this field is not available.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


