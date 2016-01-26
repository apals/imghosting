'use strict';

angular.module('imghosting.image-detail', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/images/:id', {
            templateUrl: 'image-detail/image-detail.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$scope', '$routeParams', 'ImageOne', 'Comment',
        function ($scope, $routeParams, ImageOne, Comment) {

            $scope.image = ImageOne.query({_id: $routeParams.id});

            $scope.submit = function() {
                if ($scope.comment) {
                    Comment.send_comment({id: $routeParams.id, comment: $scope.comment, username: $scope.username});
                }
            };
        }]);