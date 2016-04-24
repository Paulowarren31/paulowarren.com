var express = require('express');
var http = require('http');
var config = require('./static/js/configuratrion.js');

var app = express();

//static files that we need to use in index.html
app.use('/static', express.static(__dirname + '/static/'));
app.use('/angular', express.static(__dirname + '/angular/'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/views', express.static(__dirname + '/views/'));

//handles if you actually want to go to index
app.get('/', index);

//this is for angular routing
app.get('*', index);

function index(req, res){
	res.sendFile(__dirname + '/index.html');
}

var server = app.listen(config.port);
console.log("Express server listening on port "+ config.port);


