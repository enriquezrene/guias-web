"use strict";angular.module("guiasWebApp",["firebase","ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngclipboard","datetimepicker"]).run(["$rootScope","firebase",function(a,b){var c={apiKey:"AIzaSyBmBcJrOSbAy-dJIesNI5E_35YJLY-mAK8",authDomain:"quito-envia.firebaseapp.com",databaseURL:"https://quito-envia.firebaseio.com",storageBucket:"quito-envia.appspot.com",messagingSenderId:"253231686326"};b.initializeApp(c)}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("guiasWebApp").controller("MainCtrl",["$scope","$firebaseObject",function(a,b){function c(a){var b=a.getDate(),c=a.getMonth()+1,d=a.getFullYear();return"guias/v1/"+d+"/"+c+"/"+b}function d(a){return"guias/v1/"+a}a.selectedDate=new Date;var e=firebase.database().ref(c(a.selectedDate));a.codes=b(e),a.find=function(){var c=firebase.database().ref(d(a.selectedDate));a.codes=b(c)},a.exportData=function(){var a=new Blob([document.getElementById("exportable").innerHTML],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"});saveAs(a,"Report.xls")}}]),angular.module("guiasWebApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("guiasWebApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<form> <div class="form-group"> <label for="calendar">Fecha</label> <div class="input-group" id="calendar"> <span class="input-group-addon"> <i class="glyphicon glyphicon-calendar"></i> </span> <input type="text" id="dt1" class="form-control" datetimepicker ng-model="selectedDate" datetimepicker-options="{format:\'YYYY/M/DD\'}" name="time"> </div> </div> <button type="button" class="btn btn-sm btn-primary" ng-click="find()">Buscar</button> </form> <div style="text-align: right"> <a href="#" ng-click="exportData()"> Descargar a excel <span class="glyphicon glyphicon-download-alt"></span> </a> </div> <div class="span6" id="exportable"> <table class="table table-striped table-condensed"> <thead style="background-color: #2980b9; color: white"> <tr> <th>Bar Codes</th> <th></th> </tr> </thead> <tbody> <tr ng-repeat="barcode in codes"> <td>{{ barcode.code }}</td> <td> <!--<button type="button" class="btn btn-default" ngclipboard--> <!--data-clipboard-text="{{ barcode.code }}">--> <!--<span class="glyphicon glyphicon-copy"></span>--> <!--</button>--> <a href="#"> <span class="glyphicon glyphicon-copy" ngclipboard data-clipboard-text="{{ barcode.code }}"></span> </a> </td> </tr> </tbody> </table> </div>')}]);