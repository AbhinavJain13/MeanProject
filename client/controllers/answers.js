app.controller('ansController', function($scope,$route, ansFactory, $location, $routeParams){
$scope.answers = [];

$scope.addAns = function(){
  $location.url('/dashboard');
  $scope.newAns._ques = $routeParams.id;
  ansFactory.addAns($scope.newAns);
  $route.reload();
};

})
