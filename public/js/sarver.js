angular.module("server",[])
.factory('API',function($http){
  var base = "http://localhost:3000/";
  return{
    postDetails : function (form,url) {
      var fd = new FormData();
      for (var key in form) {
        fd.append(key, form[key]);
      }
      return $http.post(base+url,
      fd,
      {
          transformRequest:angular.indentity,
          method : 'POST',
          headers:{'Content-Type': undefined}
      });
    }
  }
});
