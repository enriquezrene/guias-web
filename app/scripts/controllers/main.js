'use strict';

/**
 * @ngdoc function
 * @name guiasWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guiasWebApp
 */
angular.module('guiasWebApp')
  .controller('MainCtrl', ['$scope', '$firebaseObject', 'dateService', function ($scope, $firebaseObject, dateService) {
    $scope.today = new Date();
    var ref = firebase.database().ref(dateService.getCurrentDateFormatted());
    $scope.codes = $firebaseObject(ref);
  }]);
