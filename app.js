var fs = require('fs');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var filename = "data.txt";

var journalData = {};

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){	
	fs.readFile(filename, 'utf8', function(err, data){
		journalData = JSON.parse(data);
		res.sendFile('index.html');
	});
});
app.get('/all', function(req, res){	
	fs.readFile(filename, 'utf8', function(err, data){
		journalData = JSON.parse(data);
		res.send(journalData);
	});
});

app.get('/journal/', function(req, res){
	fs.readFile(filename, 'utf8', function(err, data){
		journalData = JSON.parse(data);
		var links = [];
		for(keys in journalData){
			links.push(keys);
		}
		var temp = {journal: links};
		res.render('index.ejs', temp);
	});
});


app.get('/journal/new', function(req, res){
	res.send(req.params.id);
});

app.post('/journal/new', function(req, res){
	res.send(req.params.id);
});

app.get('/journal/:id', function(req, res){
	fs.readFile(filename, 'utf8', function(err, data){
		journalData = JSON.parse(data);


				
		
		res.send(htmlData);
	});
});


app.listen(9999, function(){
	console.log('Runnig server on 9999');
});

