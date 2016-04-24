var main = angular.module('Main', []);

main.controller('MainController', function($scope, drawFactory, aboutPaulo) {
	$scope.email = aboutPaulo.email;
	$scope.phone = aboutPaulo.phone;
	$scope.github = aboutPaulo.github;
	$scope.about = aboutPaulo.about;


	mouseDown = false;

	$scope.init = function(){
		drawFactory.init();
	}
	
	$scope.mouseClick = function($event){
		mouseDown = true;
	};

	$scope.mouseDrag = function($event){
		if(mouseDown){
			drawFactory.mouseClick($event);
		}
	};

	$scope.mouseUp = function(){
		mouseDown = false;
		drawFactory.newPath();
	}

})

