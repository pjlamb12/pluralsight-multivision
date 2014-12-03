var path = require('path');

var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/multivision',
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://pjlamb12:multivision@ds061360.mongolab.com:61360/multivision',
		port: process.env.PORT || 80
	}
}
