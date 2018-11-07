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
    define(['ApiClient', 'model/InlineResponse2017EmbeddedRiskInformationProviders'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2017EmbeddedRiskInformationProviders'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2017EmbeddedRiskInformation = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2017EmbeddedRiskInformationProviders);
  }
}(this, function(ApiClient, InlineResponse2017EmbeddedRiskInformationProviders) {
  'use strict';




  /**
   * The InlineResponse2017EmbeddedRiskInformation model module.
   * @module model/InlineResponse2017EmbeddedRiskInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2017EmbeddedRiskInformation</code>.
   * @alias module:model/InlineResponse2017EmbeddedRiskInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse2017EmbeddedRiskInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2017EmbeddedRiskInformation} obj Optional instance to populate.
   * @return {module:model/InlineResponse2017EmbeddedRiskInformation} The populated <code>InlineResponse2017EmbeddedRiskInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('providers')) {
        obj['providers'] = InlineResponse2017EmbeddedRiskInformationProviders.constructFromObject(data['providers']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2017EmbeddedRiskInformationProviders} providers
   */
  exports.prototype['providers'] = undefined;



  return exports;
}));


