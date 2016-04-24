var main = angular.module('Main');

main.factory('drawFactory', function() {
	var service = {};
	var lastPt = {};
	var userPath = {};
	var path = {};
	var color = '#5CAB8B';


	service.init = function() {
		var canvas = document.getElementById('Canvas');
		paper.setup(canvas);

		userPath = new paper.Path();
		userPath.strokeColor = color;
		userPath.strokeWidth = 4;

		var raster = new paper.Raster('face');
		raster.position = paper.view.center;
		raster.scale(0.1);
		raster.sendToBack();
		draw();
	}

	service.newPath = function() {
		userPath = new paper.Path();
		userPath.strokeColor = color;
		userPath.strokeWidth = 4;
	}
	service.changeColor = function(color_in) {
		color = color_in;
	}


	var draw = function() {
		paper.view.draw();
	}

	service.mouseClick = function($event) {
		lastPt.x = $event.layerX;
		lastPt.y = $event.layerY;
		userPath.add(new paper.Point(lastPt.x, lastPt.y));
		draw();
	}



	return service;
});

main.factory('aboutPaulo', function(){
	var service = {
		email:'paulowar@umich.edu',
		phone: '734-478-9395',
		github: 'https://github.com/Paulowarren31',
		about: 'I am a student at the University of Michigan. I am interested in math, computer science, and problem solving. I plan to major in computer science. I have grown up in Ann Arbor since I was four. Originally, I am from Bogota, Colombia. I found my interest in Computer science in the 10th grade when I took AP computer science.'
	};
	return service;
})
