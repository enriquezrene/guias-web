'use strict';

/**
 * @ngdoc overview
 * @name guiasWebApp
 * @description
 * # guiasWebApp
 *
 * Main module of the application.
 */
angular
  .module('guiasWebApp', [
    'firebase',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .run(['$rootScope', 'firebase', function ($rootScope, firebase) {
    var config = {
      apiKey: "AIzaSyBmBcJrOSbAy-dJIesNI5E_35YJLY-mAK8",
      authDomain: "quito-envia.firebaseapp.com",
      databaseURL: "https://quito-envia.firebaseio.com",
      storageBucket: "quito-envia.appspot.com",
      messagingSenderId: "253231686326"
    };
    firebase.initializeApp(config);
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
