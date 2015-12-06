'use strict';

// Declare app level module which depends on views, and components
angular.module('imghosting', [
    'ngRoute',
    'imghostingServices',
    'imghosting.images',
    'imghosting.image-detail',
    'imghosting.version'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/images'});
}]);
