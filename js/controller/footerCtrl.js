PCIE.controller('footerCtrl', function ($scope, LocalFactory) {
        "use strict";

        LocalFactory.menu().then(function (response) {
            $scope.footerMenu = response;
        });
    }
);
