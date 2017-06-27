angular.module('homecontroller',['server'])
//this is for uploading file
.directive('fileModel', ['$parse', function ($parse) {
   return {
      restrict: 'A',
      link: function(scope, element, attrs) {
         var model = $parse(attrs.fileModel);
         var modelSetter = model.assign;

         element.bind('change', function(){
            scope.$apply(function(){
               modelSetter(scope, element[0].files[0]);
            });
         });
      }
   };
}])
.controller('fileUpload',function($scope,API,$log){
      $scope.productUploadProcess=function(){
        API.postDetails( $scope.product,"fileUpload/process").then(function successCallback(response) {

            if(response.data.success==true)  {
              $scope.imgPath=response.data.details;   //binding image path
            }
            else  $scope.message=false;
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
});
