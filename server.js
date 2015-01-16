// server.js
//================
// SETUP
//================

/* load express */
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var session = require('express-session');

/* load handlebars */
var exphbs = require('express-handlebars');

/* mongoose for interfacing with mongodb */
var mongoose = require('mongoose');

/* passport for identity management */
var passport = require('passport');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/* load database config and open connection */
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

/* pass passport to app for configuration */
//require('./config/passport')(passport);

/* setup express */
app.use(morgan('dev')); //log every request to console
app.use(cookieParser()); //read cookies
app.use(bodyParser()); //get information from html forms
app.engine('handlebars', exphbs({defaultLayout: 'main'})); //set handlebars as view engine
app.set('view engine', 'handlebars');
/* setup passport */
app.use(session({ secret: process.env.KEEPITSECRET })); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

/* routes */
require('./app/routes/routes.js')(app, passport); //load routes and pass app

//=================
// LAUNCH
//=================
app.listen(port); //launch app listening on configured port
console.log('Launching application on ' + port);
