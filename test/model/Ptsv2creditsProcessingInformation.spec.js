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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.Ptsv2creditsProcessingInformation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Ptsv2creditsProcessingInformation', function() {
    it('should create an instance of Ptsv2creditsProcessingInformation', function() {
      // uncomment below and update the code to test Ptsv2creditsProcessingInformation
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2creditsProcessingInformation);
    });

    it('should have the property commerceIndicator (base name: "commerceIndicator")', function() {
      // uncomment below and update the code to test the property commerceIndicator
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property processorId (base name: "processorId")', function() {
      // uncomment below and update the code to test the property processorId
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentSolution (base name: "paymentSolution")', function() {
      // uncomment below and update the code to test the property paymentSolution
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property reconciliationId (base name: "reconciliationId")', function() {
      // uncomment below and update the code to test the property reconciliationId
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property linkId (base name: "linkId")', function() {
      // uncomment below and update the code to test the property linkId
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property reportGroup (base name: "reportGroup")', function() {
      // uncomment below and update the code to test the property reportGroup
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property visaCheckoutId (base name: "visaCheckoutId")', function() {
      // uncomment below and update the code to test the property visaCheckoutId
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property purchaseLevel (base name: "purchaseLevel")', function() {
      // uncomment below and update the code to test the property purchaseLevel
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property recurringOptions (base name: "recurringOptions")', function() {
      // uncomment below and update the code to test the property recurringOptions
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property bankTransferOptions (base name: "bankTransferOptions")', function() {
      // uncomment below and update the code to test the property bankTransferOptions
      //var instane = new CyberSource.Ptsv2creditsProcessingInformation();
      //expect(instance).to.be();
    });

  });

}));