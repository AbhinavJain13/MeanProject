app.factory('ansFactory', function($http, $location){
  var factory = {};

  factory.addAns = function(ans){
    $http.post('/user/ans',ans).success(function(data){

    })
  };




  return factory;
  });
