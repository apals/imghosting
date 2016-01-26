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
            $scope.images = [];
            var rowSize = 3;
            Images.query(function(response) {
                var newArr = [];
                var i = 0;
                angular.forEach(response, function (item) {
                    $scope.images.push(item);
                    newArr.push(response.slice(i, i+rowSize));
                    i += rowSize;

                });
                $scope.chunked = newArr;
            });

        }]);