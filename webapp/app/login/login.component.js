whereIsMyMoney.
component('login', {
    templateUrl: '/app/login/login.template.html',
    controller: function SearchController($scope, $rootScope, $location, $window, authService) {

        var self = this;

        this.doLogin = function() {

           authService.authorize( $scope.email, $scope.password).then( function( user ){

               $rootScope.isLogged = true;

               if ( user ) {
                   $location.path('/');
                   $window.location.reload();
               }
           });

        };


    },
    bidings: {
        isLogged: '=',
        user:'='
    }
});