var fs = require('fs');
var express = require('express');

var app = express();

var filename = "data.txt";

var journalData = {};






app.get('/', function(req, res){	
	fs.readFile(filename, 'utf8', function(err, data){
		journalData = JSON.parse(data);
		res.send(journalData);
	});
});

app.get('/journal/', function(req, res){
	
});

app.get('/journal/data', function(req, res){
	fs.readFile(filename, 'utf8', function(err, data){
		journalData = JSON.parse(data);
		
		var links = [];
		for(keys in journalData){
			links.push(keys);
		}
		var htmlData = "";
		for(var i = 0; i < links.length; i++){
			htmlData += "<div class='journal-link'><div class='journal-link-text'><a href='/journal/";
			htmlData += links[i];
			htmlData += "'>" + links[i] + "</a></div></div>";
		}
		res.send(htmlData);
	});
});

app.get('/journal/:id', function(req, res){
	res.send(req.params.id);
});

app.get('/journal/:id/entry/', function(req, res){
	res.send(req.params.id);
});

app.get('/journal/:id', function(req, res){
	res.send(req.params.id);
});

app.listen(9999, function(){
	console.log('Runnig server on 9999');
});

