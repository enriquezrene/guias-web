'use strict';

/**
 * @ngdoc function
 * @name guiasWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guiasWebApp
 */
angular.module('guiasWebApp')
  .controller('MainCtrl', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
    $scope.today = new Date();
    var ref = firebase.database().ref('28032017');
    $scope.codes = $firebaseObject(ref);
  }]);
