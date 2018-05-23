var express = require('express')
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

// app.get('/csv', (req, res) => {
// 	app.send(convertToCSV(req.body));
// });

function convertToCSV(obj) {
	// loop through obj check to see if there's children
		// want to keep adding obj[key] val into an array
	// if there's children 
		// perform recursion
	var keys = Object.keys(obj);
	var line = '';

	var firstLine = keys.slice(0, keys.length-1).join(',') + '\n';
	
	 var recurse = (obj) => {
	 	line += getDataEachObj(obj);

	 	obj.children.forEach(child => {
	 		recurse(child);
	 	});
	 }

	 recurse(obj);

	 return firstLine + line;
}

function getDataEachObj(obj) {
	var result = [];

	for (var key in obj) {
		if (key !== 'children') {
			result.push(obj[key]);
		}
	}

	return result.join(',') + '\n';
}


app.post('/csv', (req, res) => {
	// console.log('typeof---', typeof JSON.stringify(req.body));
	// console.log('this is response: ', req.body);
	res.send(convertToCSV(req.body));
	// res.sendStatus(201)
});

app.listen(3000, () => console.log('listening on port 3000'))

module.exports.app = app;

/** STATIC ASSETS **/
app.use(express.static('client'));

