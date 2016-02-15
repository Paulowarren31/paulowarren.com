angular.module('MainCtrl').controller('DrawController', function($scope){

	$scope.MAX_LINES = 20;
	$scope.maxed = false;
	$scope.notTen = false;
	$scope.drawings = [];
	var drawing = {
		segments: []
	};
	var numDrawings = 0;

	paper.install(window);
	var canvas = document.getElementById('board');

	var dispCanvas1 = document.getElementById('displayBoard1');
	var dispCanvas2 = document.getElementById('displayBoard2');
	var dispCanvas3 = document.getElementById('displayBoard3');
	var canvases = [dispCanvas1, dispCanvas2, dispCanvas3];
	var numCanvases = 0;

	paper.setup(canvas);

	var path = new Path();

	path.strokeColor = 'black';
	path.strokeWidth = 5;

	console.log(paper.projects);
	$scope.lastPt={
		x: 0,
		y: 0
	};

	$scope.getLines = function(){
		if(path.segments.length == 1){
			return 0;
		}
		if(path.segments.length == 0){
			return 0;
		}
		return path.segments.length - 1;
	}

	$scope.mouse = function($event){
		if(path.segments.length  > $scope.MAX_LINES){
			$scope.maxed = true;
		}
		else{
			$scope.lastPt.x = $event.layerX;
			$scope.lastPt.y = $event.layerY;
			drawing.segments.push({x:$scope.lastPt.x, y:$scope.lastPt.y});
			path.add(new Point($event.layerX, $event.layerY));
		}
	}

	$scope.printBorder = function(){
		var border = new Path();
		border.strokeColor = 'black';
		border.add(new Point(0, 0));
		border.add(new Point(854, 0));
		border.add(new Point(854, 425));
		border.add(new Point(0, 425));
		border.add(new Point(0, 0));
	}

	$scope.undo = function(){
		path.removeSegment(path.segments.length - 1);
	}

	$scope.reset = function(){
		path.segments = [];
		$scope.maxed = false;
		path.strokeColor = 'black';
		path.strokeWidth = 5;
		$scope.printBorder();

	}

	//numDrawing is index, not number
	var drawPathTo = function(canvas, numDrawing){
		var drawing = $scope.drawings[numDrawing];
		paper.setup(canvas);
		var draw = new Path();
		draw.strokeColor = 'black';
		draw.strokeWidth = 5;
		$scope.printBorder();
		for(var i = 0; i < drawing.segments.length; i++){
			draw.add(new Point(drawing.segments[i].x, drawing.segments[i].y));
		}
		
	}

	$scope.ten = function(){
		$scope.notTen = !$scope.notTen;
	}

	$scope.save = function(){
		if(path.segments.length < $scope.MAX_LINES){
			$scope.ten();
		}
		else{
			$scope.drawings.push(drawing);
			drawing = {
				segments: []
			};
			drawPathTo(canvases[numCanvases], numDrawings);
			numCanvases++;
			numDrawings++;	
			if(numCanvases > 2){
				numCanvases = 0;
			}
		}
	}
});
