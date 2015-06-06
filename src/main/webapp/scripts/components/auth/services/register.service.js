'use strict';

angular.module('easehandmadeApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


