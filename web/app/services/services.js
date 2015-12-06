
/**
 * Created by apals on 06/12/15.
 */
'use strict';
var armadaCopyServices = angular.module('imghostingServices', ['ngResource']);

armadaCopyServices.factory('ImageOne', ['$resource',
    function ($resource) {
        return $resource('http://localhost:5040/api/images/:_id', {}, {
            query: {method: 'GET', params: {_id: 'images'}}
        });
    }]);


armadaCopyServices.factory('Images', ['$resource',
    function ($resource) {
        return $resource('http://localhost:5040/api/images/', {}, {
            query: {method: 'GET', isArray: true}
        });
    }]);
