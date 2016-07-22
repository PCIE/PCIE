PCIE.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            url: '',
            abstract: true,
            views: {
                'footer': {
                    templateUrl: '/PCIE/footer.html'
                },
                'header': {
                    templateUrl: '/PCIE/header.html'
                }
            }
        })
        .state('root.home', {
            url: '/',
            views: {
                'container@': {
                    templateUrl: '/PCIE/home.html'
                }
            }
        })
});