'use strict';


angular.module('imghosting.upload', ['ngRoute', 'ngUpload'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/images/upload', {
            templateUrl: 'upload/upload.html',
            controller: 'UploadCtrl'
        });
    }])

    .controller('UploadCtrl', ['$scope',
        function ($scope) {
            $scope.uploadComplete = function (content) {
                $scope.response = JSON.parse(content); // Presumed content is a json string!

                // Clear form (reason for using the 'ng-model' directive on the input elements)
                $scope.title = '';
                // Look for way to clear the input[type=file] element
            };
        }]);