/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Riskv1authenticationresultsConsumerAuthenticationInformation', 'model/Riskv1authenticationresultsOrderInformation', 'model/Riskv1authenticationresultsPaymentInformation', 'model/Riskv1authenticationsClientReferenceInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1authenticationresultsConsumerAuthenticationInformation'), require('./Riskv1authenticationresultsOrderInformation'), require('./Riskv1authenticationresultsPaymentInformation'), require('./Riskv1authenticationsClientReferenceInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Request = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1authenticationresultsConsumerAuthenticationInformation, root.CyberSource.Riskv1authenticationresultsOrderInformation, root.CyberSource.Riskv1authenticationresultsPaymentInformation, root.CyberSource.Riskv1authenticationsClientReferenceInformation);
  }
}(this, function(ApiClient, Riskv1authenticationresultsConsumerAuthenticationInformation, Riskv1authenticationresultsOrderInformation, Riskv1authenticationresultsPaymentInformation, Riskv1authenticationsClientReferenceInformation) {
  'use strict';




  /**
   * The Request model module.
   * @module model/Request
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Request</code>.
   * @alias module:model/Request
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Request</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Request} obj Optional instance to populate.
   * @return {module:model/Request} The populated <code>Request</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Riskv1authenticationsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Riskv1authenticationresultsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Riskv1authenticationresultsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('consumerAuthenticationInformation')) {
        obj['consumerAuthenticationInformation'] = Riskv1authenticationresultsConsumerAuthenticationInformation.constructFromObject(data['consumerAuthenticationInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Riskv1authenticationsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationresultsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationresultsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationresultsConsumerAuthenticationInformation} consumerAuthenticationInformation
   */
  exports.prototype['consumerAuthenticationInformation'] = undefined;



  return exports;
}));


