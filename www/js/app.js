// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic-material','google-maps','ui.map', 'ui.event','ionic.rating'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

    

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',

        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.search', {
      url: '/search',
      views: {
        'tab-chats': {
          templateUrl: 'templates/search.html',
          controller: 'ChatsCtrl'
        }
      }
    })

  .state('tab.hospitals', {
      url: '/hospitals',
      views: {
        'tab-chats': {
          templateUrl: 'templates/hospital.html',
          controller: 'hospitalCtrl'
        }
      }
  
      
    })
  /*.state('tab.category', {
      url: '/category/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/category.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  

  

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })*/

    


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.nearby', {
    url: '/nearby',
    views: {
      'tab-nearby': {
        templateUrl: 'app/fare/fare.html',
        controller: 'ExampleController'
      }
    }
  })
  .state('tab.universities', {
      url: '/universities',
      views: {
        'tab-chats': {
          templateUrl: 'templates/university.html',
          controller: 'uniCtrl'
        }
      }
    })
  .state('tab.gym', {
      url: '/gym',
      views: {
        'tab-chats': {
          templateUrl: 'templates/gym.html',
          controller: 'gymCtrl'
        }
      }
    })
  .state('tab.rest', {
      url: '/rest',
      views: {
        'tab-chats': {
          templateUrl: 'templates/rest.html',
          controller: 'restCtrl'
        }
      }
    })
  .state('tab.near', {
      url: '/near',
      views: {
        'tab-account': {
          templateUrl: 'templates/nearby.html',
          controller: 'Results_With_Fare_Controller'
        }
      }
    })
    .state('tab.flight', {
      url: '/flight',
      views: {
        'tab-flight': {
          templateUrl: 'templates/flight.html',
          controller: ''
        }
      }
    })
  

  .state('app', {
      abstract: true,
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    })

  .state('app.locations', {
      url: "/locations",
      views: {
        'mainContent': {
          templateUrl: "app/locations/locations.html"
        }
      }
    })
  .state('app.location-map', {
      url: "/location-map/:id",
      views: {
        'mainContent': {
          templateUrl: "app/locations/location-map.html"
        }
      }
    })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash')

});
