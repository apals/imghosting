'use strict';

angular.module('imghosting.image-detail', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/images/:id', {
            templateUrl: 'image-detail/image-detail.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$scope', '$routeParams', 'ImageOne',
        function ($scope, $routeParams, ImageOne) {
            console.log($routeParams.id);
            $scope.image = ImageOne.query({_id: $routeParams.id});
        }]);