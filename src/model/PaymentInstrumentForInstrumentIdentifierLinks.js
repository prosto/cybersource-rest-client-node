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
    define(['ApiClient', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst'), require('./TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast'), require('./TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext'), require('./TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev'), require('./TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentInstrumentForInstrumentIdentifierLinks = factory(root.CyberSource.ApiClient, root.CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst, root.CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast, root.CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext, root.CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev, root.CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf);
  }
}(this, function(ApiClient, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf) {
  'use strict';




  /**
   * The PaymentInstrumentForInstrumentIdentifierLinks model module.
   * @module model/PaymentInstrumentForInstrumentIdentifierLinks
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentInstrumentForInstrumentIdentifierLinks</code>.
   * @alias module:model/PaymentInstrumentForInstrumentIdentifierLinks
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>PaymentInstrumentForInstrumentIdentifierLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentInstrumentForInstrumentIdentifierLinks} obj Optional instance to populate.
   * @return {module:model/PaymentInstrumentForInstrumentIdentifierLinks} The populated <code>PaymentInstrumentForInstrumentIdentifierLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf.constructFromObject(data['self']);
      }
      if (data.hasOwnProperty('first')) {
        obj['first'] = TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst.constructFromObject(data['first']);
      }
      if (data.hasOwnProperty('prev')) {
        obj['prev'] = TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev.constructFromObject(data['prev']);
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext.constructFromObject(data['next']);
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast.constructFromObject(data['last']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf} self
   */
  exports.prototype['self'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst} first
   */
  exports.prototype['first'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev} prev
   */
  exports.prototype['prev'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext} next
   */
  exports.prototype['next'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast} last
   */
  exports.prototype['last'] = undefined;



  return exports;
}));

