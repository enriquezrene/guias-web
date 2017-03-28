angular
  .module('guiasWebApp')
  .service('dateService', function () {

    this.getCurrentDateFormatted = function () {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      return day + '_' + month + '_' + year;
    };

  });
