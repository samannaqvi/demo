/**
 * Created by Saman on 6/14/2016.
 */

var app = angular.module('starter',['ionic'])
app.controller('AppCtrl',function ($scope) {
  $scope.OnClick = function () {
    alert("hello");
  }
$scope.item=['Karachi', 'Lahore', 'Islamabad']

})

