whereIsMyMoney.service('paymentService', function($http,API_URL) {

    delete $http.defaults.headers.common['X-Requested-With'];


    this.addPayment = function( amount, description, location ) {

        var postData = {
            amount: amount,
            description: description,
            location: location
        };

        return $http({
            method: 'POST',
            dataType: 'jsonp',
            url: API_URL + '/payment/add',
            data: postData
        });
    };


    this.getAll = function( ) {


        return $http({
            method: 'GET',
            dataType: 'jsonp',
            url: API_URL + '/payment/all'
        });
    }


});