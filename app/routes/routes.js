//app/routes/routes.js

module.exports = function(app, passport) {
	//=======================
	// PRIMARY ROUTES
	//=======================

	/* home pages */
	app.get('/', function(req,res) {
		res.render('index');
	});
}