'use strict';

angular.module('easehandmadeApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
