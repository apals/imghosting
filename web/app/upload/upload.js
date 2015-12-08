'use strict';


angular.module('imghosting.upload', ['ngRoute', 'ngUpload'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/images/upload', {
            templateUrl: 'upload/upload.html',
            controller: 'UploadCtrl'
        });
    }])

    .controller('UploadCtrl', ['$scope', '$routeParams',
        function ($scope, $routeParams) {

            console.log("uploadctrl");

            $scope.uploadComplete = function (content) {
                console.log("uploadctrl2");
                $scope.response = JSON.parse(content); // Presumed content is a json string!
                $scope.response.style = {
                    color: $scope.response.color,
                    "font-weight": "bold"
                };

                // Clear form (reason for using the 'ng-model' directive on the input elements)
                $scope.fullname = '';
                $scope.gender = '';
                $scope.color = '';
                // Look for way to clear the input[type=file] element
            };
        }]);