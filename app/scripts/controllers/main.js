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

    $scope.selectedDate = new Date();
    var ref = firebase.database().ref(getRef($scope.selectedDate));
    $scope.codes = $firebaseObject(ref);

    function getRef(currentDate) {
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      return 'guias/v1/' + year + "/" + month + '/' + day;
    }

    function getRefFromString(dateAsString) {
      return 'guias/v1/' + dateAsString;
    }

    $scope.find = function () {
      var ref = firebase.database().ref(getRefFromString($scope.selectedDate));
      $scope.codes = $firebaseObject(ref);
    };

    $scope.exportData = function () {
      var blob = new Blob([document.getElementById('exportable').innerHTML], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
      saveAs(blob, "Report.xls");
    };

  }]);

