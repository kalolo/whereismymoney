whereIsMyMoney.config(function ($routeProvider) {


    $routeProvider
        .when('/', {
            template: '<payment></payment>'
        })
        .when('/payment',{
            template: '<payment></payment>'
        })
        .when('/history',{
            template: '<history></history>'
        })
        .when('/login', {
            template: '<login></login>'
        })
        .when('/logout',{
            template:'<logout></logout>'
        })
        .otherwise({
            redirectTo: '/login'
        });

});