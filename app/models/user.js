//app/models/users.js

var mongoose = require('mongoose');

/* define user schema */
var userSchema = mongoose.Schema({

	google : {
		id : String,
		token : String,
		name : String,
		email : String,
	},
	authorized : Boolean
});

/* create model and expose to app */
module.exports = mongoose.model('User', userSchema);
