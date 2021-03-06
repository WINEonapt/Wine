angular.module("app", ['ui.router', 'ngTouch', 'chart.js'])
	.run(['$state', '$rootScope',  ($state, $rootScope )=>{

	}])
	.config(['$locationProvider', '$stateProvider', '$urlRouterProvider','$httpProvider',
	  ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) =>{

      delete $httpProvider.defaults.headers.common['X-Requested-With'];
	    $locationProvider.html5Mode(true)
	    $urlRouterProvider.when('','/')
	    $urlRouterProvider.otherwise("/404/");
	    $stateProvider
	      .state('404', {
          url:'/404/',
          templateUrl: "/html/404.html"
		    })
	      .state('main', {
	        url:'/',
	        templateUrl: "/html/index.html",
	        controller: "mainController"
        })
	      .state('deg', {
	        url:'/degust/',
	        templateUrl: "/html/degust.html",
	        controller: "degController"
        })
	      .state('deg.fleivor', {
	        url:'fleivor/',
	        templateUrl: "/html/fleivor.html"
        })
	      .state('deg.grafik', {
	      	url:'grafik/',
	        templateUrl: "/html/grafik.html"
	        // controller: "RadarCtrl"
	      })
	  }
	])
