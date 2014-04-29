/*global describe, expect, it, beforeEach, inject, module, console*/
var Main;
(function () {
    'use strict';

    describe('app module', function () {

        beforeEach(module('app'));
        
        it('should have an appConfig', inject(function (appConfig) {
            expect(appConfig).toBeDefined();
            expect(appConfig.project).toBeDefined();
        }));
        
        it('should have no views by default', inject(function (views) {
            expect(views).toBeDefined();
            expect(views.length).toBe(0);
        }));
        
        it('should have a navController injected', inject(function ($controller) {
            var appConfig = { project: 'ProjectName' },
                location = {
                    path: function () { return '/home'; }
                },
                views = [],
                controller = $controller('navController', {
                    appConfig: appConfig,
                    $location: location,
                    views: views
                });
                                        
            expect(controller.project).toBe(appConfig.project, "project");
            expect(controller.views.length).toBe(0, "views");
            expect(controller.isActive('/home')).toBeTruthy("/home");
            expect(controller.isActive('/about')).toBeFalsy("/about");
        }));
    });
    
    describe('Main', function () {
        it('should have a navController', function () {
            var appConfig = { project: 'ProjectName' },
                location = {
                    path: function () { return '/home'; }
                },
                views = [{}, {}],
                vm;

            expect(Main).toBeDefined("Main");
            expect(Main.navController).toBeDefined("Main");
    
            vm = Main.navController(appConfig, location, views);
            
            expect(vm.project).toBe(appConfig.project, "project");
            expect(vm.views.length).toBe(2, "views");
            expect(vm.isActive('/home')).toBeTruthy("/home");
            expect(vm.isActive('/about')).toBeFalsy("/about");
        });
    });

    describe('nav controller', function () {

        it('should have a viewModel', function () {
            var appConfig = { project: 'ProjectName' },
                location = {
                    path: function () { return '/home'; }
                },
                views = [],
                vm = Main.navController(appConfig, location, views);

            expect(vm.project).toBe(appConfig.project, "project");
            expect(vm.views.length).toBe(0, "views");
            expect(vm.isActive('/home')).toBeTruthy("/home");
            expect(vm.isActive('/about')).toBeFalsy("/about");
        });
    });
    
}());