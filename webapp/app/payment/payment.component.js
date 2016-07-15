whereIsMyMoney.
component('payment', {
    templateUrl: '/app/payment/payment.template.html',
    controller: function paymentController($scope, authService, geoLocationService, paymentService) {

        console.log("payment Component!!!");


        this.ready    = false;
        this.position = {};

        ctrl = this;

        this.addPayment = function( amount ) {

            console.log( amount, this.position );

            paymentService.addPayment(amount, "Checking changes", this.position);

        };


        this.getLocation = function() {

            console.log("Get location", navigator.geolocation);

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){
                    $scope.$apply(function(){
                        ctrl.ready = true;
                        ctrl.position = position;
                        console.log(ctrl.position);
                    });
                });
            } else {
                $scope.ready = true;
            }
        };

        this.getLocation();
    }
});