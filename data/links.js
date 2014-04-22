/*global angular, $, console, $q*/
(function () {
    'use strict';
    
    var serviceId = 'datacontext',
        app = angular.module('app');
        
    function datacontext() {
        
        var getLinks = function () {
            var url = '/data/links.json',
                promise = $.getJSON(url)
                    .always(function () {
                        console.log("Fetching " + url);
                    });
            return promise;
        },
            
            mockLinks = function () {
                var promise = { };
                promise.isMock = true;
                promise.done = function (f) {
                    var data = {};
                    data.groups = [{}];
                    data.groups[0].name = "G1";
                    data.groups[0].links = [{},{}];
                    data.groups[0].links[0].name = "Test";
                    data.groups[0].links[0].url = "xxxxx";
                    data.groups[0].links[1].name = "Test 2";
                    data.groups[0].links[1].url = "xzzzzzx";
        
                    f(data);
                    return this;
                };
                promise.fail = function (f) {
                    return this;
                }
                return promise;
            },
        
            service = {
                getLinks: getLinks,
                mockLinks: mockLinks
            };

        return service;
    }
    app.factory(serviceId, ['$q', datacontext]);
 
}());