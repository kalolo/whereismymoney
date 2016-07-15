whereIsMyMoney.component('logout', {
    controller: function logoutController($scope, $rootScope, $location, $window, authService) {
        authService.logout();
        $window.location.reload();
    }
});