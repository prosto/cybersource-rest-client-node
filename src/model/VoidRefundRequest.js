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
    define(['ApiClient', 'model/Ptsv2paymentsidreversalsClientReferenceInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsidreversalsClientReferenceInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.VoidRefundRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsidreversalsClientReferenceInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsidreversalsClientReferenceInformation) {
  'use strict';




  /**
   * The VoidRefundRequest model module.
   * @module model/VoidRefundRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>VoidRefundRequest</code>.
   * @alias module:model/VoidRefundRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>VoidRefundRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoidRefundRequest} obj Optional instance to populate.
   * @return {module:model/VoidRefundRequest} The populated <code>VoidRefundRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2paymentsidreversalsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsidreversalsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;



  return exports;
}));


