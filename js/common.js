/*global angular*/
var Common = (function () {
    
    'use strict';
    
    Common = {};
    //
    // Formats error messages embedded in jqXHR object (jquery ajax call)
    //
    Common.formatJqxhrErrorMsg = function (jqXHR, textStatus, errorThrown) {
        return "Error fetching links: " + errorThrown + " (" + textStatus + ") " + jqXHR.responseText;
    };
    
    //
    // Convenience method to add Controller
    //
    Common.addController = function (controllerId, module, dependencies, controller) {
        dependencies.push(controller);
        angular.module(module).controller(controllerId, dependencies);
    };
    
    //
    // Convenience method to add Route
    //
    Common.registerRoute = function (app, routeInfo) {
        angular.module(app).config(['$routeProvider', function ($routeProvider, views) {

            $routeProvider.when(
                routeInfo.path,
                {
                    title: routeInfo.title,
                    templateUrl: routeInfo.templateUrl
                }
            );
        }]);
        angular.module(app).run(['views', function (views) {
            views.push(routeInfo.tabName);
        }]);
    };
    return Common;
}());