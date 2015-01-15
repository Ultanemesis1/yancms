// config/passport.js
/* load the things */
var GoogleStrategy = require('passport-google').Strategy;

/* load user model */
var User = require('../app/models/user');

/* load auth config */
var configAuth = require('./auth');

/* expose config to app using module.exports */
module.exports = function(passport) {


	//===============
	// SESSION SETUP
	//===============
	/* require for persistent logins
	serialize and unserialize users out of session */

	/* serialize user for session */
	passport.seralizeUser(function(user, done) {
		done(null, user.id);
	});

	/* deserialize user */
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	//=============
	// GOOGLE
	//=============
	passport.use(new GoogleStrategy({
		clientID : configAuth.googleAuth.clientID,
		clientSecret : configAuth.googleAuth.clientSecret,
		callbackURL : configAuth.googleAuth.callbackURL,

	},
	function(token, refreshToken, profile, done) {
		process.nextTick(function(){

			/* check to see if user already exists */
			User.findOne({ 'google.id':profile.id}, function(err, user) {
				if(err){
					return done(err);
				}
				if(user){
					/* if found, log user in */
					return done(null, user);
				}
				else {
					/* if user does not exist, create user */
					var newUser = new User();

					/* set all profile information */
					newUser.google.id = profile.id;
					newUser.google.token = token;
					newUser.google.name = profile.displayName;
					newUSer.googe.email = profile.emails[0].value;

					/* save the new user */
					newUser.save(function(err) {
						if(err){
							throw err;
						return done(null, newUser);
						}
					});
				}
			});
		});


	}));


};