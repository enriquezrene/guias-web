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
    var ref = firebase.database().ref(getRef());
    $scope.codes = $firebaseObject(ref);

    function getRef() {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      return 'guias/v1/' + year + "/" + month + '/' + day;
    }

    $scope.exportData = function () {
      var blob = new Blob([document.getElementById('exportable').innerHTML], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
      saveAs(blob, "Report.xls");
    };

  }]);

