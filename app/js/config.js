PCIE.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');


    $stateProvider
        .state('root', {
            url: '',
            abstract: true,
            views: {
                'footer': {
                    templateUrl: '../views/footer.html'
                },
                'header': {
                    templateUrl: '../views/header.html'
                }
            }
        })
        .state('root.accueil', {
            url: '/',
            views: {
                'container@': {
                    templateUrl: '../views/accueil.html'
                }
            }
        })
        .state('root.pcie', {
            url: '/pcie',
            views: {
                'container@': {
                    templateUrl: '../views/pcie/pcie.html',
                    controller: 'pcieCtrl'
                }
            }
        })
        .state('root.service', {
            url: '/service',
            views: {
                'container@': {
                    templateUrl: '../views/service/service.html',
                    controller: 'serviceCtrl'
                }
            }
        })
        .state('root.carriere', {
            url: '/carriere',
            views: {
                'container@': {
                    templateUrl: '../views/carriere/carriere.html',
                    controller: 'carriereCtrl'
                }
            }
        })
        .state('tiny', {
            url: '',
            abstract: true,
            views: {
                'footer': {
                    templateUrl: '../views/footer.html'
                },
                'header': {
                    templateUrl: '../views/tinyHeader.html'
                }
            }
        })
        .state('tiny.mentionsLegales', {
            url: '/mentionsLegales',
            views: {
                'container@': {
                    templateUrl: '../views/mentions-legales.html'
                }
            }
        })
});