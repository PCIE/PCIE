PCIE.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('pcie', {
        url: '/pcie',
        templateUrl: '/PCIE/views/pcie.html'
    })
        .state('pcie.localisation', {
            url: '/localisation',
            templateUrl: '/PCIE/views/pcie/localisation.html'
        })
        .state('pcie.valeurs', {
            url: '/valeurs',
            templateUrl: '/PCIE/views/pcie/nos-valeurs.html'
        })
        .state('pcie.equipe', {
            url: '/equipe',
            templateUrl: '/PCIE/views/pcie/notre-equipe.html',
            controller: function ($scope) {
                $scope.adresses = ['dev', 'web', 'test'];
            }
        })
        .state('pcie.quisommenous', {
            url: '/quisommenous',
            templateUrl: '/PCIE/views/pcie/qui-sommes-nus.html',
            controller: function ($scope) {
                $scope.adresses = ['6 avenue Prat Gimont', '31130', 'Balma'];
            }
        })
        .state('services', {
            url: '/services',
            templateUrl: '/PCIE/views/services.html'
        })
        .state('carriere', {
            url: '/carriere',
            templateUrl: '/PCIE/views/carriere.html'
        })
        .state('carriere.listeOffres', {
            url: '/depot',
            templateUrl: 'partial-carriere-offres.html',
            controller: function ($scope) {
                $scope.offres = ['Java', 'Javascript', 'PHP'];
            }
        });
});
