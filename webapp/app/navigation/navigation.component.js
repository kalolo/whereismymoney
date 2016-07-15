whereIsMyMoney.
component('navigation', {
    templateUrl: '/app/navigation/navigation.template.html',
    controller: function SearchController($scope, $rootScope, authService, geoLocationService) {

        this.isLogged = $rootScope.isLogged;

    },
    bidings: {
        isLogged: '=',
        user:'='
    }
});