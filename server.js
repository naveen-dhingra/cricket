/**
 * starting the server, route requests and connect to mongoDB
 */

var express = require("express");
var expresslayouts = require('express-ejs-layouts');
var bodyParser = require("body-parser");
var moongose = require('mongoose');
var router = require('./app/routes');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var session = require('express-session');
var port = 4444;
var passport = require('passport');
var flash = require('connect-flash');
var app = express();


//use ejs and express ejs layouts
app.set('view engine', 'ejs');
app.use(expresslayouts);

//log every request to the console
app.use(morgan('dev'));

//use body parser to get information from html forms
app.use(bodyParser.urlencoded());

require('./config/passport')(passport); // pass passport for configuration

//read cookies for authentication
app.use(cookieParser());

//reuire for passport
app.use(session({ secret: 'ilovemyfamilymorethenanything'})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //login sessions
app.use(flash()); //connect flash for flash messages stored in session


//route our app
app.use('/', router);

//set static files {css, images etc}
app.use(express.static(__dirname + '/public'));

//start the server
app.listen(port, function () {
    console.log("Cricket started on port " + port);
});


//connect to mongoose db and create collection
moongose.connect('mongodb://navdhingra:bondbhai1977@ds119090.mlab.com:19090/cricketdb');
console.log("connect to cricket DB");

//console.log('the collection created is' + dbcollection);

