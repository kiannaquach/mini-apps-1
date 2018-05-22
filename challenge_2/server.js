var express = require('express')
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.get('/csv', (req, res) => 
	console.log('this is responseeee: ', res)
)

function convertToCSV(obj) {
	var keys = Object.keys(obj);
	var line = '';

	var firstLine = keys.slice(0, keys.length-1).join(',') + '\n';
	var parsedObj = JSON.parse(obj);

	
	// // for (var i = 0; i < obj.length; i++) {
	// // 	for (key in obj[i]) {

	// // 	}
	// // }
	// var result = [];
	// var eachLine = '';

	// for (var key in obj) {
	// 	if (key !== 'children') {
	// 		line = result.push(obj[key]).join(',') + '/n';
	// 	}
	// }
}

app.post('/csv', (req, res) => {
	// console.log('typeof---', typeof JSON.stringify(req.body));
	console.log('this is response: ', req.body)
	// convertToCSV(req.body);
	// res.sendStatus(201)
});

app.listen(3000, () => console.log('listening on port 3000'))

module.exports.app = app;

/** STATIC ASSETS **/
app.use(express.static('client'));

