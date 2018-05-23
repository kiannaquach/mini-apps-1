var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => res.send('hello world!'))

app.listen(3000, () => console.log('listening on port 3000!'));
