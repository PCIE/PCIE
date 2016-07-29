PCIE.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');


    $stateProvider
        .state('root', {
            url: '',
            abstract: true,
            views: {
                'footer': {
                    templateUrl: '/PCIE/views/footer.html'
                },
                'header': {
                    templateUrl: '/PCIE/views/header.html'
                }
            }
        })
        .state('root.accueil', {
            url: '/',
            views: {
                'container@': {
                    templateUrl: '/PCIE/views/accueil.html'
                }
            }
        })
        .state('root.pcie', {
            url: '/pcie',
            views: {
                'container@': {
                    templateUrl: '/PCIE/views/pcie/pcie.html',
                    controller: 'pcieCtrl'
                }
            }
        })
        .state('root.service', {
            url: '/service',
            views: {
                'container@': {
                    templateUrl: '/PCIE/views/service/service.html',
                    controller: 'serviceCtrl'
                }
            }
        })
        .state('root.carriere', {
            url: '/carriere',
            views: {
                'container@': {
                    templateUrl: '/PCIE/views/carriere/carriere.html',
                    controller: 'carriereCtrl'
                }
            }
        })
        .state('tiny', {
            url: '',
            abstract: true,
            views: {
                'footer': {
                    templateUrl: '/PCIE/views/footer.html'
                },
                'header': {
                    templateUrl: '/PCIE/views/tinyHeader.html'
                }
            }
        })
        .state('tiny.mentionsLegales', {
            url: '/mentionsLegales',
            views: {
                'container@': {
                    templateUrl: '/PCIE/views/mentions-legales.html'
                }
            }
        })
});