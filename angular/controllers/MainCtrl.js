angular.module('MainCtrl', []).controller('MainController', function($scope) {
	$scope.email = 'paulowar@umich.edu';
	$scope.phone = '734-478-9395';
	$scope.github = 'https://github.com/Paulowarren31';
	$scope.writeupTitle = 'Write-up';
	$scope.aboutPaulo = 'Hi, my name is Paulo Warren. I am a freshman student at the university of michigan. I am interested in math, computer science, and problem solving. I plan to major in computer science. I have grown up in Ann Arbor since I was four. Originally, I am from Bogota, Colombia. I found my interest in computer science in the 10th grade when I took AP computer science.';
	$scope.siteExplained = 'I made this site using a Node.js backend which doesn\'t do much other than serve the frontend, which I made using AngularJS. To make it pretty, I used Bootstrap, and some of my own css.';

	$scope.nodeText = 'I was first introduced to node when I attended a summer camp with Microsoft where they taught me the basics of web development. I am using Express with node to serve the angular part of my site to the user. If I had more time, I would hook up a database that would work with the drawing game to save the drawings permanently.';

	$scope.angularText = 'Most of the work on the site was using AngularJS. I have used angular for a while, and I feel somewhat comfortable working with a MVC development environment. My controller for the drawing game is a bit large, but I would change this if given more time.';

	$scope.gamcincText = 'I worked for a company called Global Automotive Management Council, where I managed their wordpress sites. In addition, I worked on their app using my knowledge of html, css and javascript in combination with Cordova, something that lets you create mobile applications with html, css, and javascript. ';

	$scope.beginWriteup = 'I really enjoy how the layout of the site looks right now, but I found some subtle things that could improved the site.'
	$scope.write1 = 'I would change the color of the hovering over links on the front page. That feature is really nice, but the combination of the grey and the background makes it difficult to read.';
	$scope.write2 = 'The contact us page has everything you need and it is straightforward and probably works just fine, but it looks a little sloppy. The form elements dont line up, and it seems like they were just put in there only for function.';
	$scope.write3  = 'One feature I especially liked was the hover color of the landing pages under the Michigan Daily header. This is pretty, and I think that when navigating to those respective parts of the site, that part should remain highlighted depending on what part of the site you are on.';

	$scope.playGround = 'Clicking the draw button will take you to the playground part of the site. I used a graphics scripting framework to set up a basic drawing app where you click to draw lines. You have 20 lines to create something. You can click reset to reset your image, undo to take away the latest line, and save to put it in the gallery below the drawing.It is a little laggy, and I tried to get loading animations to work, but it didn\'t work out how I wanted it to.';
});
