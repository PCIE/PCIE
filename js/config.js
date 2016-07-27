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
                    templateUrl: '/PCIE/views/pcie.html'
                }
            }
        })
        .state('root.pcie', {
            url: '/pcie',
            views: {
                'container@': {
                    templateUrl: '/PCIE/views/pcie.html'
                }
            }
        })
        .state('root.mentionsLegales', {
            url: '/mentionsLegales',
            views: {
                'container@': {
                    templateUrl: '/PCIE/views/mentions-legales.html'
                }
            }
        })
});