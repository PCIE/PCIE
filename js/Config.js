PCIE.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('pcie', {
            url: '/pcie',
            templateUrl: '/PCIE/views/pcie.html'
        })

        // nested list with custom controller
        .state('pcie.localisation', {
            url: '/localisation',
            templateUrl: '/PCIE/views/pcie/localisation.html',
            controller: function($scope) {
                $scope.adresses = ['6 avenue Prat Gimont', '31130', 'Balma'];
            }
        })

        // nested list with custom controller
        .state('pcie.valeurs', {
            url: '/valeurs',
            templateUrl: '/PCIE/views/pcie/nos-valeurs.html',
            controller: function($scope) {
                $scope.adresses = ['test', 'test'];
            }
        })

        // nested list with custom controller
        .state('pcie.equipe', {
            url: '/equipe',
            templateUrl: '/PCIE/views/pcie/notre-equipe.html',
            controller: function($scope) {
                $scope.adresses = ['dev', 'web', 'test'];
            }
        })

        // nested list with custom controller
        .state('pcie.quisommenous', {
            url: '/quisommenous',
            templateUrl: '/PCIE/views/pcie/qui-sommes-nus.html',
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


}); // closes $PCIE.config()
