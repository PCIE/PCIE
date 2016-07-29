PCIE.controller('navBarCtrl', function ($scope, $rootScope, $location, $anchorScroll, LocalFactory, anchorSmoothScroll) {
        "use strict";

        LocalFactory.menu().then(function (response) {
            $scope.headerMenu = response;
            $scope.sousMenu = getSousMenu($location.url());
        });

    $scope.scrollTo = function (anchor) {
        $anchorScroll(anchor);
    }

        $rootScope.$on("$locationChangeSuccess", function () {
            $scope.sousMenu = getSousMenu($location.url());
        });

        function getSousMenu(url) {
            let prefix = '.#';
            for (var i = 0; i < $scope.headerMenu.length; i++) {
                if ($scope.headerMenu[i].url === prefix + url) {
                    return $scope.headerMenu[i].souscategorie;
                }
            }
        }
    }
);