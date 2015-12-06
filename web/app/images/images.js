'use strict';

angular.module('imghosting.images', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/images', {
    templateUrl: 'images/images.html',
    controller: 'View1Ctrl'
  });
}])

    .controller('View1Ctrl', ['$scope', '$routeParams', 'Images',
        function ($scope, $routeParams, Images) {
            $scope.images = Images.query();
        }]);