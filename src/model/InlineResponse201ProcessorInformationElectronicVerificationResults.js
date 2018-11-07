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
    root.CyberSource.InlineResponse201ProcessorInformationElectronicVerificationResults = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse201ProcessorInformationElectronicVerificationResults model module.
   * @module model/InlineResponse201ProcessorInformationElectronicVerificationResults
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse201ProcessorInformationElectronicVerificationResults</code>.
   * @alias module:model/InlineResponse201ProcessorInformationElectronicVerificationResults
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>InlineResponse201ProcessorInformationElectronicVerificationResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201ProcessorInformationElectronicVerificationResults} obj Optional instance to populate.
   * @return {module:model/InlineResponse201ProcessorInformationElectronicVerificationResults} The populated <code>InlineResponse201ProcessorInformationElectronicVerificationResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('codeRaw')) {
        obj['codeRaw'] = ApiClient.convertToType(data['codeRaw'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('emailRaw')) {
        obj['emailRaw'] = ApiClient.convertToType(data['emailRaw'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('phoneNumberRaw')) {
        obj['phoneNumberRaw'] = ApiClient.convertToType(data['phoneNumberRaw'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('postalCodeRaw')) {
        obj['postalCodeRaw'] = ApiClient.convertToType(data['postalCodeRaw'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('streetRaw')) {
        obj['streetRaw'] = ApiClient.convertToType(data['streetRaw'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nameRaw')) {
        obj['nameRaw'] = ApiClient.convertToType(data['nameRaw'], 'String');
      }
    }
    return obj;
  }

  /**
   * Mapped Electronic Verification response code for the customer’s name. 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Raw Electronic Verification response code from the processor for the customer’s last name
   * @member {String} codeRaw
   */
  exports.prototype['codeRaw'] = undefined;
  /**
   * Mapped Electronic Verification response code for the customer’s email address. 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Raw Electronic Verification response code from the processor for the customer’s email address.
   * @member {String} emailRaw
   */
  exports.prototype['emailRaw'] = undefined;
  /**
   * Mapped Electronic Verification response code for the customer’s phone number. 
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * Raw Electronic Verification response code from the processor for the customer’s phone number.
   * @member {String} phoneNumberRaw
   */
  exports.prototype['phoneNumberRaw'] = undefined;
  /**
   * Mapped Electronic Verification response code for the customer’s postal code. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Raw Electronic Verification response code from the processor for the customer’s postal code.
   * @member {String} postalCodeRaw
   */
  exports.prototype['postalCodeRaw'] = undefined;
  /**
   * Mapped Electronic Verification response code for the customer’s street address. 
   * @member {String} street
   */
  exports.prototype['street'] = undefined;
  /**
   * Raw Electronic Verification response code from the processor for the customer’s street address.
   * @member {String} streetRaw
   */
  exports.prototype['streetRaw'] = undefined;
  /**
   * TODO 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * TODO
   * @member {String} nameRaw
   */
  exports.prototype['nameRaw'] = undefined;



  return exports;
}));


