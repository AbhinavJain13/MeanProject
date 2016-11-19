app.factory('quesFactory', function($http){
  var factory = {};


  factory.addQues = function(ques){
    $http.post('/user/ques', ques).success(function(data){
      
    })
  };

  factory.questions = [];

  factory.index = function(callback){
    $http.get('/ques/all').success(function(output){
    factory.questions = output;
    callback(output);
    })
  };


  return factory;
});
