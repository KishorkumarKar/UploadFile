angular.module('myApp', ['ngRoute','homecontroller'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'fileUpload',
      templateUrl:'templates/pages/fileUpload.html',
    })
});
