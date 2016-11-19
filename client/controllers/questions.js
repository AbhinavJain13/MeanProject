app.controller('quesController', function($scope, $route, quesFactory, $location){
  $scope.questions=[];

  $scope.addQues= function(){
    $location.url('/dashboard');
    quesFactory.addQues($scope.newQues);
    $route.reload();
  };


  quesFactory.index(function(data){
    $scope.questions = data;
  })
});
