var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 3000;
var corsOptions = {
	origin: 'http://localhost:' + port
}

var app = express();

app.use(bodyParser.json())
app.use(cors(corsOptions));







app.listen(port, function() {
	console.log('listening on port', port)
})