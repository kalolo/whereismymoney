whereIsMyMoney.
component('history', {
    templateUrl: '/app/history/history.template.html',
    controller: function historyController($scope, authService, paymentService) {

        this.payments = [];
        this.loading  = true;
        _ctrl = this;
        
        paymentService.getAll().then(function( response ){

            _ctrl.payments = response.data;

        });

        
    }
});