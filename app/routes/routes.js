//app/routes/routes.js


module.exports = function(app, passport) {
	//=======================
	// Primary Routes
	//=======================

	/* home pages */
	app.get('/', function(req,res) {
		res.render('index');
	});

	/* show dashboard */
	app.get('/dashboard', isLoggedIn, function(req, res) {
		res.render('dashboard', {
			user : req.user
		});
	});

	/* page for registered but unauthorized users */
	app.get('/pending', function(req, res) {
		res.render('pending', {
			user : req.user
		});
	});

	/* log out */
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	//=======================
	// Google Auth Routes
	//=======================

	/* send to Google to do authentication */
	app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

	/* callback after Google authenticates */
	app.get('/auth/google/callback',
		passport.authenticate('google', {
			successRedirect : '/dashboard',
			failureRedirect : '/'
		}));
};

/* check if user is logged in */
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()){
		return next();
	}
	// redirect if not logged in
	res.redirect('/');
}
