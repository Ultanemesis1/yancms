// auth.js
/* expose config to app using module.exports */
module.exports = {
	'googleAuth' : {
		'clientID' : process.env.GOOGLEAUTHID,
		'clientSecret' : process.env.GOOGLESECRET,
		'callbackURL' : process.env.AUTHCALLBACKURL
	}
};