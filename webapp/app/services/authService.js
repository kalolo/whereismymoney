whereIsMyMoney.service('authService', function($http,$cookies, userSession ,API_URL) {

    delete $http.defaults.headers.common['X-Requested-With'];


    this.authorize = function( email, password ) {

        console.log(">> Get auth token: ", email, password, API_URL);

        var postData = {
            email: email,
            password: password
        };

        return $http({
            method: 'POST',
            dataType: 'jsonp',
            url: API_URL + '/auth/',
            data: postData
        }).then(function(response) {

            userSession.create(response.data.token, email);

            var today = new Date();
            var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);

            $cookies.putObject('userSession', {'token': response.data.token, 'email': email}, {
                'expires': nextweek
            });


            return {token: response.data.token, email: email};
        });
    };

    this.isAuthenticated = function () {
        return !!userSession.user.token;
    };

    this.logout = function() {

        $cookies.remove('token');
        $cookies.remove('userSession');

        userSession.destroy();

    };

    this.getUserSession = function() {
        return userSession.user;
    };

});