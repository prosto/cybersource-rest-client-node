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
    root.CyberSource.InlineResponse20012ConsumerAuthenticationInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20012ConsumerAuthenticationInformation model module.
   * @module model/InlineResponse20012ConsumerAuthenticationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse20012ConsumerAuthenticationInformation</code>.
   * @alias module:model/InlineResponse20012ConsumerAuthenticationInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlineResponse20012ConsumerAuthenticationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20012ConsumerAuthenticationInformation} obj Optional instance to populate.
   * @return {module:model/InlineResponse20012ConsumerAuthenticationInformation} The populated <code>InlineResponse20012ConsumerAuthenticationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eciRaw')) {
        obj['eciRaw'] = ApiClient.convertToType(data['eciRaw'], 'String');
      }
      if (data.hasOwnProperty('cavv')) {
        obj['cavv'] = ApiClient.convertToType(data['cavv'], 'String');
      }
      if (data.hasOwnProperty('xid')) {
        obj['xid'] = ApiClient.convertToType(data['xid'], 'String');
      }
      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Raw electronic commerce indicator (ECI).
   * @member {String} eciRaw
   */
  exports.prototype['eciRaw'] = undefined;
  /**
   * Cardholder authentication verification value (CAVV).
   * @member {String} cavv
   */
  exports.prototype['cavv'] = undefined;
  /**
   * Transaction identifier.
   * @member {String} xid
   */
  exports.prototype['xid'] = undefined;
  /**
   * Payer auth Transaction identifier.
   * @member {String} transactionId
   */
  exports.prototype['transactionId'] = undefined;



  return exports;
}));


