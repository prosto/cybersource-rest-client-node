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
    define(['ApiClient', 'model/AuthenticationExemptionsRequest', 'model/PtsV2PaymentsPost502Response', 'model/RiskV1AuthenticationExcemptionsPost400Response', 'model/RiskV1AuthenticationExemptionsPost201Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AuthenticationExemptionsRequest'), require('../model/PtsV2PaymentsPost502Response'), require('../model/RiskV1AuthenticationExcemptionsPost400Response'), require('../model/RiskV1AuthenticationExemptionsPost201Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.AuthenticationExemptionsApi = factory(root.CyberSource.ApiClient, root.CyberSource.AuthenticationExemptionsRequest, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.RiskV1AuthenticationExcemptionsPost400Response, root.CyberSource.RiskV1AuthenticationExemptionsPost201Response);
  }
}(this, function(ApiClient, AuthenticationExemptionsRequest, PtsV2PaymentsPost502Response, RiskV1AuthenticationExcemptionsPost400Response, RiskV1AuthenticationExemptionsPost201Response) {
  'use strict';

  /**
   * AuthenticationExemptions service.
   * @module api/AuthenticationExemptionsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new AuthenticationExemptionsApi. 
   * @alias module:api/AuthenticationExemptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the authenticationExemptions operation.
     * @callback module:api/AuthenticationExemptionsApi~authenticationExemptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiskV1AuthenticationExemptionsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authentication exemptions service
     * A new CYBS branded service to connect to VISA’s REST API to enable Visa Transaction Advisor (VTA) as a standalone service for merchants to support PSD2/SCA adoption and exemptions processing startegy in Europe.VTA Provides intelligent risk data to merchants as inputs to their in-house fraud management tools for fraud mitigation on Visa transactions. 
     * @param {module:model/AuthenticationExemptionsRequest} authenticationExemptionsRequest 
     * @param {module:api/AuthenticationExemptionsApi~authenticationExemptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RiskV1AuthenticationExemptionsPost201Response}
     */
    this.authenticationExemptions = function(authenticationExemptionsRequest, callback) {
      var postBody = authenticationExemptionsRequest;

      // verify the required parameter 'authenticationExemptionsRequest' is set
      if (authenticationExemptionsRequest === undefined || authenticationExemptionsRequest === null) {
        throw new Error("Missing the required parameter 'authenticationExemptionsRequest' when calling authenticationExemptions");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = RiskV1AuthenticationExemptionsPost201Response;

      return this.apiClient.callApi(
        '/risk/v1/authentication-exemptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
