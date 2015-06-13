(function () {
    'use strict';

    angular.module('starter').controller('LocationMapCtrl', ['$stateParams', 'eliteApi','$scope', LocationMapCtrl]);

    function LocationMapCtrl($stateParams, eliteApi, $scope) {
        var vm = this;
        
        /*vm.locationId = Number($stateParams.id);
        console.log($stateParams.id);

        vm.map = {
            center: {
                lat: 24.4667,
                lng: 54.3667,
            },
            zoom: 12
        };
        vm.marker = { }

        eliteApi.getLeagueData().then(function(data){

            console.log(data[0].geometry.location);

            //vm.location = _.find(data, { id: vm.locationId });
            console.log(vm.location)
            vm.marker = {

                latitude: data[0].geometry.location.lat,
                longitude: data[0].geometry.location.lng,
                title: data[0].name + "<br/>(Tap for directions)",
                showWindow: true
            };
           
            console.log(vm);
            

            vm.map.center.latitude = data[0].geometry.location.lat;
            vm.map.center.longitude = data[0].geometry.location.lng;
        });

        vm.locationClicked = function(marker){
            window.location = "geo:" + marker.latitude + "," + marker.longitude + ";u=35";
        };*/

        angular.extend($scope, {
            centerProperty: {
                lat: 25.1063355,
                lng: 55.16425370000002
            },
            zoomProperty: 12,
            markersProperty: [ {
                    latitude: 25.1063355,
                    longitude: 25.1063355
                }],
            clickedLatitudeProperty: null,  
            clickedLongitudeProperty: null,
        });

        
    };
})();