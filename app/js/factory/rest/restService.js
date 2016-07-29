PCIE.factory("RestService", [ "Restangular", "$rootScope", function(Restangular, $rootScope) {
	return {
		create : function(service) {
			var rest = Restangular.withConfig(function(RestangularConfigurer, url) {
				RestangularConfigurer.setBaseUrl('/genAE-ws/rest/');
			});
			return rest.all(service);
		}
	}
} ]);
