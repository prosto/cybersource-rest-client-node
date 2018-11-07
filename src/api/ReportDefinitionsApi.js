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
    define(['ApiClient', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse4007'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2004'), require('../model/InlineResponse2005'), require('../model/InlineResponse4007'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportDefinitionsApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2004, root.CyberSource.InlineResponse2005, root.CyberSource.InlineResponse4007);
  }
}(this, function(ApiClient, InlineResponse2004, InlineResponse2005, InlineResponse4007) {
  'use strict';

  /**
   * ReportDefinitions service.
   * @module api/ReportDefinitionsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ReportDefinitionsApi. 
   * @alias module:api/ReportDefinitionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
    var exports = function(configObject, apiClient = undefined) {
    this.apiClient = apiClient || ApiClient.instance;

    this.apiClient.setConfiguration(configObject);


    /**
     * Callback function to receive the result of the getResourceInfoByReportDefinition operation.
     * @callback module:api/ReportDefinitionsApi~getResourceInfoByReportDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single report definition information
     * The report definition name must be used as path parameter exclusive of each other
     * @param {String} reportDefinitionName Name of the Report definition to retrieve
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Cybersource Organization Id
     * @param {module:api/ReportDefinitionsApi~getResourceInfoByReportDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.getResourceInfoByReportDefinition = function(reportDefinitionName, opts, callback) {
      opts = opts || {};  
      var postBody = null;

      // verify the required parameter 'reportDefinitionName' is set
      if (reportDefinitionName === undefined || reportDefinitionName === null) {
        throw new Error("Missing the required parameter 'reportDefinitionName' when calling getResourceInfoByReportDefinition");
      }


      var pathParams = {
        'reportDefinitionName': reportDefinitionName
      };
      var queryParams = {
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/reporting/v3/report-definitions/{reportDefinitionName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getResourceV2Info operation.
     * @callback module:api/ReportDefinitionsApi~getResourceV2InfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get reporting resource information
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Cybersource Organization Id
     * @param {module:api/ReportDefinitionsApi~getResourceV2InfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.getResourceV2Info = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/reporting/v3/report-definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
