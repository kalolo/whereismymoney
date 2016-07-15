travelPlanner.
    component('searchPanel', {
        templateUrl: '/app/search/search.template.html',
        controller: function SearchController($scope, flightSearchService) {

        this.offerTitle = "/";
        this.foundOffers = false;
        this.fromAirport = $scope.fromAirport;
        this.toAirport   = $scope.toAirport;
        var self = this;


        this.searchFlights = function() {

            console.log("searchFlights::", $scope.fromAirport, $scope.toAirport);

            this.foundOffers = false;


            flightSearchService.search( $scope.fromAirport, $scope.toAirport).then(function(response){

                 console.log(response.data);

                 this.foundOffers = true;
                 self.renderOffers( response.data );
            });

        };


        this.renderOffers = function( offersResponse ) {

             this.offerTitle = offersResponse.title;

        };


    }
});