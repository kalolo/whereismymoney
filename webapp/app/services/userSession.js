whereIsMyMoney.service('userSession', function( ) {

    this.user = {};

    this.create = function (token, email) {
        this.user = {
            token: token,
            email: email,
        };
    };


    this.destroy = function () {
        this.user = {};
    };

});