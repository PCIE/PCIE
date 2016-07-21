PCIE.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('pcie', {
            url: '/pcie',
            templateUrl: '/PCIE/views/pcie.html'
        })

        // nested list with custom controller
        .state('pcie.localisation', {
            url: '/localisation',
            templateUrl: '/PCIE/views/pcie/Localisation.html',
            controller: function($scope) {
                $scope.adresses = ['6 avenue Prat Gimont', '31130', 'Balma'];
            }
        })

        // nested list with custom controller
        .state('pcie.valeurs', {
            url: '/valeurs',
            templateUrl: '/PCIE/views/pcie/Nos-Valeurs.html',
            controller: function($scope) {
                $scope.adresses = ['test', 'test'];
            }
        })

        // nested list with custom controller
        .state('pcie.equipe', {
            url: '/equipe',
            templateUrl: '/PCIE/views/pcie/Notre-Equipe.html',
            controller: function($scope) {
                $scope.adresses = ['dev', 'web', 'test'];
            }
        })

        // nested list with custom controller
        .state('pcie.quisommenous', {
            url: '/quisommenous',
            templateUrl: '/PCIE/views/pcie/Qui-Sommes-Nous.html',
            controller: function($scope) {
                $scope.adresses = ['6 avenue Prat Gimont', '31130', 'Balma'];
            }
        })




        .state('about', {
          url: '/about',
          views: {

              // the main template will be placed here (relatively named)
              '': { templateUrl: '/PCIE/views/about.html' },

              // the child views will be defined here (absolutely named)
              'columnOne@about': { template: 'Look I am a column!' },

              // for column two, we'll define a separate controller
              'columnTwo@about': {
                  templateUrl: 'table-data.html',
                  controller: 'scotchController'
              }
          }
        })


        // HOME STATES AND NESTED VIEWS ========================================
        .state('services', {
            url: '/services',
            templateUrl: '/PCIE/views/services.html'
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('carriere', {
            url: '/carriere',
            templateUrl: '/PCIE/views/carriere.html'
        })

        // nested list with custom controller
        .state('carriere.listeOffres', {
            url: '/depot',
            templateUrl: 'partial-carriere-offres.html',
            controller: function($scope) {
                $scope.offres = ['Java', 'Javascript', 'PHP'];
            }
        });


}); // closes $routerApp.config()


// let's define the scotch controller that we call up in the about state
routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});
