(function () {
    'use strict';

    angular.module('starter').controller('ExampleController', ['$scope','$q','$http','ionicMaterialMotion','ionicMaterialInk', function($scope,$q,$http, ionicMaterialMotion,ionicMaterialInk) {
      
        ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
    ionicMaterialInk.displayEffect();
      $scope.master = {};

      $scope.tramStations = function(user) {
        $scope.master = angular.copy(user);
        var deferred = $q.defer();
                //cacheKey = "leagues",
               // leaguesData = self.leaguesCache.get(cacheKey);

            /*if (leaguesData) {
                console.log("Found data inside cache for RTA", leaguesData);
                deferred.resolve(leaguesData);
            } else {*/
                var tramst = $scope.master;
                //console.log(tramst.cardType);
                //console.log(tramst.souStation);
                //console.log(tramst.desStation);
                var vm = this;
                var req = {
                method: 'GET',
                url: 'https://api.apim.ibmcloud.com/rta/sb/tramstations/all?client_id=fef6cc65-e843-455f-b44f-0bba3b0c002f&client_secret=yL0mK7yQ0uU1fN4lQ2iL5wU1yP3bW6uA7uU5eP5jQ5pO8wO7tY',
                headers: {
                'Content-Type': 'application/json'
                },
                
                }

                $http(req)
                .success(function(data) {
                        //console.log(data);
                        console.log("Received data via HTTP");
                      //  self.leaguesCache.put(cacheKey, data);
                        $scope.totalst = data.features;
                        //console.log($scope.totalst);
                        $scope.myNames = $scope.totalst;
                        $scope.destst = $scope.totallst;


                        for (var i = 0; i < $scope.totalst.length; i++) {
                          
                          $scope.selectedId = $scope.totalst[i];
                          

                         // $scope.studentCourseId = $scope.allCourses[i].Courses[i]
                          //$scope.myCourses = $scope.allCourses[1].Courses;
                        }
                        //console.log($scope.myNames);

                        //deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                        //console.log(data)
                    });
            
            return deferred.promise;


        }

        $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.busStations = function(user) {
        $scope.master = angular.copy(user);
        var deferred = $q.defer();
                //cacheKey = "leagues",
               // leaguesData = self.leaguesCache.get(cacheKey);

            /*if (leaguesData) {
                console.log("Found data inside cache for RTA", leaguesData);
                deferred.resolve(leaguesData);
            } else {*/
                var busStat = $scope.master;
                //console.log(tramst.cardType);
                //console.log(tramst.souStation);
                //console.log(tramst.desStation);
                var vm = this;
                var req = {
                method: 'GET',
                url: 'https://api.apim.ibmcloud.com/rta/sb/busstations/all?client_id=fef6cc65-e843-455f-b44f-0bba3b0c002f&client_secret=yL0mK7yQ0uU1fN4lQ2iL5wU1yP3bW6uA7uU5eP5jQ5pO8wO7tY',
                headers: {
                'Content-Type': 'application/json'
                },
                
                }

                $http(req)
                .success(function(data) {
                        //console.log(data);
                        console.log("Received data via HTTP");
                      //  self.leaguesCache.put(cacheKey, data);
                        $scope.busSt = data.features;
                        //console.log($scope.busSt);
                        $scope.busNames = $scope.busSt;
                        $scope.busdest = $scope.busSt;


                        
                        //console.log($scope.busNames);

                        //deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                        //console.log(data)
                    });
            
            return deferred.promise;


        }

        $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.metroStations = function(user) {
        $scope.master = angular.copy(user);
        var deferred = $q.defer();
                //cacheKey = "leagues",
               // leaguesData = self.leaguesCache.get(cacheKey);

            /*if (leaguesData) {
                console.log("Found data inside cache for RTA", leaguesData);
                deferred.resolve(leaguesData);
            } else {*/
                var metroStat = $scope.master;
                //console.log(tramst.cardType);
                //console.log(tramst.souStation);
                //console.log(tramst.desStation);
                var vm = this;
                var req = {
                method: 'GET',
                url: 'https://api.apim.ibmcloud.com/rta/sb/metrostations/all?client_id=fef6cc65-e843-455f-b44f-0bba3b0c002f&client_secret=yL0mK7yQ0uU1fN4lQ2iL5wU1yP3bW6uA7uU5eP5jQ5pO8wO7tY',
                headers: {
                'Content-Type': 'application/json'
                },
                
                }

                $http(req)
                .success(function(data) {
                        //console.log(data);
                        console.log("Received data via HTTP");
                      //  self.leaguesCache.put(cacheKey, data);
                        $scope.metroSt = data.features;
                        console.log($scope.metroSt);
                        $scope.metroNames = $scope.metroSt;
                        $scope.metrodest = $scope.metroSt;


                        
                        console.log($scope.metroNames);

                        //deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                        //console.log(data)
                    });
            
            return deferred.promise;


        }

        $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };
       

      $scope.tram = function(user) {
        $scope.master = angular.copy(user);
        var deferred = $q.defer();
                //cacheKey = "leagues",
               // leaguesData = self.leaguesCache.get(cacheKey);

            /*if (leaguesData) {
                console.log("Found data inside cache for RTA", leaguesData);
                deferred.resolve(leaguesData);
            } else {*/
                var tramData = $scope.master;
                var sourcest = $scope.myNames.properties.STATION_NAME_EN.toUpperCase();
                var destinationst = $scope.destst.properties.STATION_NAME_EN.toUpperCase()

                console.log(tramData.cardType);
                console.log(sourcest);
                console.log(destinationst);

                var vm = this;
                var req = {
                method: 'POST',
                url: 'https://api.apim.ibmcloud.com/rta/sb/fare/tram?client_id=fef6cc65-e843-455f-b44f-0bba3b0c002f&client_secret=yL0mK7yQ0uU1fN4lQ2iL5wU1yP3bW6uA7uU5eP5jQ5pO8wO7tY',
                headers: {
                'Content-Type': 'application/json'
                },
                data: {     "SourceStation": sourcest ,
                            "DestStation": destinationst,
                            "CardType": tramData.cardType

                    }
                }

                $http(req)
                .success(function(data) {
                        //console.log(data);
                        console.log("Received data via HTTP");
                      //  self.leaguesCache.put(cacheKey, data);
                        $scope.tramFare = data;
                        console.log($scope.tramFare);

                        //deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                        //console.log(data)
                    });
            
            return deferred.promise;


        }
      

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();

      


      $scope.bus = function(user) {
        $scope.masterBus = angular.copy(user);
        var deferred = $q.defer();
                //cacheKey = "leagues",
               // leaguesData = self.leaguesCache.get(cacheKey);

            /*if (leaguesData) {
                console.log("Found data inside cache for RTA", leaguesData);
                deferred.resolve(leaguesData);
            } else {*/
                var busData = $scope.masterBus;
                var sourcest = $scope.busNames.properties.STOPS_NAME_EN.toUpperCase();
                var destinationst = $scope.busdest.properties.STOPS_NAME_EN.toUpperCase()

                //console.log(sourcest);
               // console.log(destinationst);
              //  console.log(busData.cardType);
                var vm = this;
                var req = {
                method: 'POST',
                url: 'https://api.apim.ibmcloud.com/rta/sb/fare/bus?client_id=fef6cc65-e843-455f-b44f-0bba3b0c002f&client_secret=yL0mK7yQ0uU1fN4lQ2iL5wU1yP3bW6uA7uU5eP5jQ5pO8wO7tY',
                headers: {
                'Content-Type': 'application/json'
                },
                data: {     
                           "SourceStation": sourcest,
                           "DestStation": destinationst,
                           "CardType": busData.cardType
                        }

                    
                }

                $http(req)
                .success(function(data) {
                        //console.log(data);
                        console.log("Received data via HTTP");
                      //  self.leaguesCache.put(cacheKey, data);
                        $scope.busFare = data;
                        console.log($scope.busFare);

                        //deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                        //console.log(data)
                    });
            
            return deferred.promise;

        }

        $scope.metro = function(user) {
        $scope.masterMetro = angular.copy(user);
        var deferred = $q.defer();
                //cacheKey = "leagues",
               // leaguesData = self.leaguesCache.get(cacheKey);

            /*if (leaguesData) {
                console.log("Found data inside cache for RTA", leaguesData);
                deferred.resolve(leaguesData);
            } else {*/
                var metroData = $scope.masterMetro;

                 var metrost = $scope.metroNames.properties.STATION_NAME_EN.toUpperCase();
                var metrodestst = $scope.metrodest.properties.STATION_NAME_EN.toUpperCase()

                console.log(metrost);
                console.log(metrodestst);
                console.log(metroData.cardType);
                var vm = this;
                var req = {
                method: 'POST',
                url: 'https://api.apim.ibmcloud.com/rta/sb/fare/metro?client_id=fef6cc65-e843-455f-b44f-0bba3b0c002f&client_secret=yL0mK7yQ0uU1fN4lQ2iL5wU1yP3bW6uA7uU5eP5jQ5pO8wO7tY',
                headers: {
                'Content-Type': 'application/json'
                },
                data: {     
                           "SourceStation": metrost,
                           "DestStation": metrodestst,
                           "CardType": metroData.cardType
                        }

                    
                }

                $http(req)
                .success(function(data) {
                        //console.log(data);
                        console.log("Received data via HTTP");
                      //  self.leaguesCache.put(cacheKey, data);
                        $scope.metroFare = data;
                        console.log($scope.metroFare);

                        //deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                        //console.log(data)
                    });
            
            return deferred.promise;


        }


    }]);

    /*function bustimetable() {
            var deferred = $q.defer(),
                cacheKey = "leagues",
                leaguesData = self.leaguesCache.get(cacheKey);

            /*if (leaguesData) {
                console.log("Found data inside cache for RTA", leaguesData);
                deferred.resolve(leaguesData);
            } else {
                var req = {
                method: 'POST',
                url: 'https://api.apim.ibmcloud.com/rta/sb/gisdata/bustimetable?client_id=fef6cc65-e843-455f-b44f-0bba3b0c002f&client_secret=yL0mK7yQ0uU1fN4lQ2iL5wU1yP3bW6uA7uU5eP5jQ5pO8wO7tY',
                headers: {
                'Content-Type': 'application/json'
                },
                data: {     $scope.master 
                    }
                }

                $http(req)
                .success(function(data) {
                        //console.log(data);
                        console.log("Received data via HTTP");
                        self.leaguesCache.put(cacheKey, data);
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                    });
            
            return deferred.promise;
        }*/




})();