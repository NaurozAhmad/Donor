'use strict';
angular.module('main', [
	'ionic',
	'ionic-datepicker',
	'ionic-timepicker',
	'ngCordova',
	'ui.router',
])
.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/main');
	$stateProvider
	.state('main', {
		url: '/main',
		templateUrl: 'main/templates/main.html',
		controller: 'MainCtrl'
	})
	.state('register', {
		url: '/register',
		templateUrl: 'main/templates/register.html',
		controller: 'RegisterCtrl'
	})
	.state('ask', {
		url: '/ask',
		templateUrl: 'main/templates/ask.html',
		controller: 'AskCtrl'
	})
});
