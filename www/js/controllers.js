angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicSideMenuDelegate,$ionicSlideBoxDelegate,$http,ionicMaterialInk) {
   $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  ionicMaterialInk.displayEffect();

  $scope.hospitalSel = "restaurant";


  $scope.max = 5;

navigator.geolocation.getCurrentPosition(function(position) {
       
     $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+position.coords.latitude+','+position.coords.longitude+'&radius=4000&types='+$scope.hospitalSel+'&key=AIzaSyD0of8qFHGkUH_QL1h2F80sUFF4EggwW1E').then(function(resp) {
    console.log('Success', resp);
  $scope.Result = resp.data.results;
  console.log($scope.Result)
  $scope.rate = $scope.Result[0].rating;
  $scope.rate1 = $scope.Result[1].rating;
  $scope.rate2 = $scope.Result[2].rating;
  $scope.rate3 = $scope.Result[3].rating;
  $scope.rate4 = $scope.Result[4].rating;

  angular.forEach(resp.data.results,function(value,key){

    var R = 6371; // Radius of the earth in km
  var dLat = (value.geometry.location.lat- position.coords.latitude) * (Math.PI/180);  // deg2rad below
  var dLon = (value.geometry.location.lng- position.coords.longitude) * (Math.PI/180); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos((position.coords.latitude) * (Math.PI/180)) * Math.cos((value.geometry.location.lat) * (Math.PI/180)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km


   value.distance = Math.round(d * 100) / 100;



 

  });
  

    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    //alert("error");
    // err.status will contain the status code
  }); 
             
    });



})

.controller('ChatsCtrl', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.lat = "0";
        $scope.lng = "0";
        $scope.accuracy = "0";
        $scope.error = "";
        $scope.model = { myMap: undefined };
        $scope.myMarkers = [];
 
        $scope.showResult = function () {
            return $scope.error == "";
        }
 
        $scope.mapOptions = {
            center: new google.maps.LatLng($scope.lat, $scope.lng),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
 
        $scope.showPosition = function (position) {
            $scope.lat = position.coords.latitude;
            $scope.lng = position.coords.longitude;
            $scope.accuracy = position.coords.accuracy;
            $scope.$apply();
 
            var latlng = new google.maps.LatLng($scope.lat, $scope.lng);
            $scope.latlng = latlng;
            $scope.model.myMap.setCenter(latlng);
            $scope.myMarkers.push(new google.maps.Marker({ map: $scope.model.myMap, position: latlng }));
           // console.log($scope.latlng);
            console.log($scope.model);
            console.log($scope.mapOptions)
        }
 
        $scope.showError = function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $scope.error = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    $scope.error = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    $scope.error = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    $scope.error = "An unknown error occurred."
                    break;
            }
            $scope.$apply();
        }
 
        $scope.getLocation = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError);
            }
            else {
                $scope.error = "Geolocation is not supported by this browser.";
            }
        }
 
        $scope.getLocation();
/*var searchAddressInput = document.getElementById('pac-input');
var autocomplete = new google.maps.places.Autocomplete(searchAddressInput, $scope.mapOptions);
//set the bounds of autocomplete to map's current viewport
//autocomplete.bindTo( $scope.model.locationMap);
google.maps.event.addListener(autocomplete, 'place_changed', function () {
    onPlaceChanged();
        });
function onPlaceChanged() {
    var place = autocomplete.getPlace();
    $scope.model.myMap.panTo(place.geometry.location);
    $scope.model.myMap.setZoom(14);
    //place pin on the map
    //$scope.myMarkers.push(new google.maps.Marker({ map: $scope.model.myMap, position: latlng }));
    //marker.setPosition(new
}*/
  
  


})

.controller('hospitalCtrl', function($scope, $http,ionicMaterialInk) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  ionicMaterialInk.displayEffect();
  $scope.hospitalSel = "hospital";
  
  navigator.geolocation.getCurrentPosition(function(position) {
       
     $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+position.coords.latitude+','+position.coords.longitude+'&radius=4000&types='+$scope.hospitalSel+'&key=AIzaSyD0of8qFHGkUH_QL1h2F80sUFF4EggwW1E').then(function(resp) {
    console.log('Success', resp);
  $scope.Result = resp.data.results;
  console.log($scope.Result)
    })
   })


})

.controller('uniCtrl', function($scope, $http,ionicMaterialInk) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  ionicMaterialInk.displayEffect();
  $scope.uniSel = "university";
  
  navigator.geolocation.getCurrentPosition(function(position) {
       
     $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+position.coords.latitude+','+position.coords.longitude+'&radius=4000&types='+$scope.uniSel+'&key=AIzaSyD0of8qFHGkUH_QL1h2F80sUFF4EggwW1E').then(function(resp) {
    console.log('Success', resp);
  $scope.Resultuni = resp.data.results;
  console.log($scope.Resultuni)
    })
   })


})

.controller('gymCtrl', function($scope, $http,ionicMaterialInk) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  ionicMaterialInk.displayEffect();
  $scope.gymSel = "gym";
  
  navigator.geolocation.getCurrentPosition(function(position) {
       
     $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+position.coords.latitude+','+position.coords.longitude+'&radius=4000&types='+$scope.gymSel+'&key=AIzaSyD0of8qFHGkUH_QL1h2F80sUFF4EggwW1E').then(function(resp) {
    console.log('Success', resp);
  $scope.Resultgym = resp.data.results;
  console.log($scope.Resultgym)
    })
   })


})

.controller('restCtrl', function($scope, $http,ionicMaterialInk) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  ionicMaterialInk.displayEffect();
  $scope.restSel = "restaurant";
  
  navigator.geolocation.getCurrentPosition(function(position) {
       
     $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+position.coords.latitude+','+position.coords.longitude+'&radius=4000&types='+$scope.restSel+'&key=AIzaSyD0of8qFHGkUH_QL1h2F80sUFF4EggwW1E').then(function(resp) {
    console.log('Success', resp);
  $scope.Resultrest = resp.data.results;
  console.log($scope.Resultrest)
    })
   })


})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  //$scope.chat = Chats.get($stateParams.zain);
  
  console.log($scope.hospitalSel);


  
        
       angular.extend($scope, {
      centerProperty: {
        lat: 22.11,
        lng: 72.47
      },
      zoomProperty: 8,
      markersProperty: [ {
          latitude: 22.11,
          longitude: 72.47
        }],
      clickedLatitudeProperty: null,  
      clickedLongitudeProperty: null,
    });
})

.controller('AccountCtrl', function($scope,$ionicSlideBoxDelegate,ionicMaterialMotion,ionicMaterialInk) {
  $scope.settings = {
    enableFriends: true
  };

  ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
    ionicMaterialInk.displayEffect();

    $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }
})

.controller('Results_With_Fare_Controller', function($scope, $http,ionicMaterialInk) {
 

$scope.SearchResults = function(placeToSearch)
{

 var search_term = document.getElementById('searchTerm').value;

   $http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+search_term+' in dubai,uae&key=AIzaSyD0of8qFHGkUH_QL1h2F80sUFF4EggwW1E').then(function(response) {

     $scope.SearchResult_api = response.data.results;

   

 $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+$scope.SearchResult_api[0].geometry.location.lat+','+$scope.SearchResult_api[0].geometry.location.lng+'&radius=1500&types=train_station&key=AIzaSyD0of8qFHGkUH_QL1h2F80sUFF4EggwW1E').then(function(dest_resp) {
    console.log('Success', dest_resp);
 
   

  angular.forEach(dest_resp.data.results,function(value,key){

    var R = 6371; // Radius of the earth in km
  var dLat = (value.geometry.location.lat- $scope.SearchResult_api[0].geometry.location.lat) * (Math.PI/180);  // deg2rad below
  var dLon = (value.geometry.location.lng- $scope.SearchResult_api[0].geometry.location.lng) * (Math.PI/180); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(($scope.SearchResult_api[0].geometry.location.lat) * (Math.PI/180)) * Math.cos((value.geometry.location.lat) * (Math.PI/180)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km


   value.distance = Math.round(d * 100) / 100;

 

  });
  

dest_resp.data.results.sort();



$scope.destinationMetro = dest_resp.data.results[0].name;
$scope.destinationMetroDistance = dest_resp.data.results[0].distance;


   })
  
})

$scope.CalculateMetroDistance();

}
 

  $scope.CalculateMetroDistance = function()
{
   


navigator.geolocation.getCurrentPosition(function(position) {
       
       // metro stations
     $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+position.coords.latitude+','+position.coords.longitude+'&radius=1500&types=train_station&key=AIzaSyD0of8qFHGkUH_QL1h2F80sUFF4EggwW1E').then(function(resp) {
    console.log('Success', resp);
  $scope.Result = resp.data.results;
   

  angular.forEach(resp.data.results,function(value,key){

    var R = 6371; // Radius of the earth in km
  var dLat = (value.geometry.location.lat- position.coords.latitude) * (Math.PI/180);  // deg2rad below
  var dLon = (value.geometry.location.lng- position.coords.longitude) * (Math.PI/180); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos((position.coords.latitude) * (Math.PI/180)) * Math.cos((value.geometry.location.lat) * (Math.PI/180)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km


   value.distance = Math.round(d * 100) / 100;

 

  });
  

resp.data.results.sort();



$scope.SourceMetro = resp.data.results[0].name;
$scope.SourceMetroDistance = resp.data.results[0].distance;


console.log($scope.SourceMetro);



    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    //alert("error");
    // err.status will contain the status code
  }); 
             
    });

$scope.CalculateMetroFare();
   
}



 $scope.CalculateMetroFare  = function()
 {


 
 
         var msgdata = {
                
    
                           "SourceStation": $scope.SourceMetro.replace(" Metro Station","").toUpperCase(),
                           "DestStation": $scope.destinationMetro.replace(" Metro Station","").toUpperCase(),
                           "CardType": "SILVER"
  

            };
        var res = $http.post('https://api.apim.ibmcloud.com/rta/sb/fare/metro?client_id=fef6cc65-e843-455f-b44f-0bba3b0c002f&client_secret=yL0mK7yQ0uU1fN4lQ2iL5wU1yP3bW6uA7uU5eP5jQ5pO8wO7tY',msgdata);
        res.success(function(data, status, headers, config) {
          console.log(data);

$scope.messageTxt = data[0].message;
$scope.Fare_amount = data[0].Fare;
           // $state.go('flight_result',{data:null});
        });

       res.error(function(data){

          console.log(data);
        });

    }
});






    

