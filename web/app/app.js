'use strict';

// Declare app level module which depends on views, and components
angular.module('imghosting', [
    'ngRoute',
    'ngUpload',
    'imghostingServices',
    'imghosting.upload',
    'imghosting.images',
    'imghosting.image-detail',
    'imghosting.version'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/images'});
}]);
