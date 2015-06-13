(function () {
    'use strict';

    angular.module('starter').controller('LocationsCtrl', ['eliteApi', LocationsCtrl]);

    function LocationsCtrl(eliteApi) {
        var vm = this;
        
        eliteApi.getLeagueData().then(function(data){
            vm.locations = data;
            console.log(vm.locations)
        });
    };
})();