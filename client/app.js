var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider){
	$routeProvider
	.when('/logreg', {
		templateUrl: 'partials/logreg.html'
	})

	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html'
	})

	$routeProvider
	.when('/newQues', {
		templateUrl: 'partials/newQues.html'
	})

	$routeProvider
	.when('/question/:id/newanswer', {
		templateUrl: 'partials/newanswer.html'
	})


	$routeProvider
	.when('/question/:id', {
		templateUrl: 'partials/show.html'
	})

	.otherwise({
		redirectTo: '/logreg'
	})
})
