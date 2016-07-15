var whereIsMyMoney = angular
    .module('whereIsMyMoney', ['ngAnimate', 'ngRoute','ngCookies'])
    .constant("API_URL", "https://api.whereismymoney.com:8443/api")
    .config(function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
    .controller("mainCtrl", function($scope, $rootScope, authService){
        console.log("mainCtrl!!!");


        $rootScope.isLogged = authService.isAuthenticated();
        $scope.isLogged = $rootScope.isLogged;
        $scope.user     = authService.getUserSession();


    })
    .directive('navigation', function( ){

        return{
            scope: true,
            templateUrl: '/app/views/navigation.html'
        }


    })
    .run(function($rootScope, $cookies, $location, authService, userSession) {

        console.log("App run", $location.path());

        
        if ( authService.isAuthenticated() ) {
            console.log("User logged in!!", userSession);
        } else {
            
            if ( $cookies.getObject('userSession') ) {
                var session = $cookies.getObject('userSession');
                userSession.create(session.token, session.email);
                console.log('Cookie signin...');
            } else {
                $location.path('/login');
            }

        }

        $rootScope.$on('$routeChangeStart', function(event){

            if ( $location.path() != '/login' && $location.path() != '/logout' && !authService.isAuthenticated() ) {
                $location.path('/login');
                event.preventDefault();
            }

        });


    });
;