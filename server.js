var express = require('express'),
	mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
var config = {
	rootPath: __dirname
};

require('./server/config/express')(app, config);

if( env === 'development'){
	mongoose.connect('mongodb://localhost/multivision');
} else {
	mongoose.connect('mongodb://pjlamb12:multivision@ds061360.mongolab.com:61360/multivision');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
	console.log('multivision db opened');
});

app.get('/partials/*', function(req, res) {
		res.render('../../public/app/' + req.params[0]);
});

app.get('*', function(req, res) {
	res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');
