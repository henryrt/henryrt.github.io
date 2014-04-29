/*global describe, it, expect, beforeEach, inject*/
/*global angular*/
var Common;
(function () {
    'use strict';

    describe('Common', function () {

        it('has been declared', function () {
            expect(Common).toBeDefined();
        });
        
    });
    
    describe('Convenience methods', function () {
        
        it('formatJqxhrErrorMsg', function () {
            var errorThrown = "some error",
                textStatus = "random status",
                jqXHR = { responseText: "more information than you need to know" },
                expectation =
                         "Error fetching links: " + errorThrown + " (" + textStatus + ") " + jqXHR.responseText,
                actual = Common.formatJqxhrErrorMsg(jqXHR, textStatus, errorThrown);
            
            expect(actual).toBe(expectation);
        });
        
    });
    
    describe('Angular convenience methods', function () {
        
        beforeEach(function () {
            angular.module('test_module', []).value('views', []);
        });
        
//        it('registerRoute adds view information', inject(function (views) {
//            Common.registerRoute('test_module', {
//                path: "/about",
//                title: "About",
//                templateUrl: "/templates/about.html"
//            });
//            expect(views.length).toBe(1);
//        }));
    });
        
}());
           
