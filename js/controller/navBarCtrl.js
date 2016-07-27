PCIE.controller('navBarCtrl', function ($scope, LocalFactory) {
        "use strict";

        LocalFactory.menu().then(function (response) {
            $scope.menu = response;
        });
    }
);