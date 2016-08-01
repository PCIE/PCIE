PCIE.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');


    $stateProvider
        .state('root', {
            url: '',
            abstract: true,
            views: {
                'footer': {
                    templateUrl: '/PCIE/app/views/footer.html'
                },
                'header': {
                    templateUrl: '/PCIE/app/views/header.html'
                }
            }
        })
        .state('root.accueil', {
            url: '/',
            views: {
                'container@': {
                    templateUrl: '/PCIE/app/views/accueil.html'
                }
            }
        })
        .state('root.pcie', {
            url: '/pcie',
            views: {
                'container@': {
                    templateUrl: '/PCIE/app/views/pcie/pcie.html',
                    controller: 'pcieCtrl'
                }
            }
        })
        .state('root.service', {
            url: '/service',
            views: {
                'container@': {
                    templateUrl: '/PCIE/app/views/service/service.html',
                    controller: 'serviceCtrl'
                }
            }
        })
        .state('root.carriere', {
            url: '/carriere',
            views: {
                'container@': {
                    templateUrl: '/PCIE/app/views/carriere/carriere.html',
                    controller: 'carriereCtrl'
                }
            }
        })
        .state('tiny', {
            url: '',
            abstract: true,
            views: {
                'footer': {
                    templateUrl: '/PCIE/app/views/footer.html'
                },
                'header': {
                    templateUrl: '/PCIE/app/views/tinyHeader.html'
                }
            }
        })
        .state('tiny.mentionsLegales', {
            url: '/mentionsLegales',
            views: {
                'container@': {
                    templateUrl: '/PCIE/app/views/mentions-legales.html'
                }
            }
        })
});