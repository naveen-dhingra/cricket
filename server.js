/**
 * starting the server, route requests and connect to mongoDB
 */

var express = require("express");
var expresslayouts = require('express-ejs-layouts');
var bodyParser = require("body-parser");
var moongose = require('mongoose');
var router = require('./app/routes');
var app = express();

var port = 8080;

//require('./defectschema');

//use ejs and express ejs layouts
app.set('view engine', 'ejs');
app.use(expresslayouts);

//use body parser
app.use(bodyParser.urlencoded());

//route our app
    
app.use('/', router);

//set static files {css, images etc}
app.use(express.static(__dirname + '/public'));

//start the server
app.listen(port, function () {
    console.log("Cricket started");
});


//connect to mongoose db and create collection
moongose.connect('mongodb://navdhingra:bondbhai1977@ds119090.mlab.com:19090/cricketdb');
console.log("connect to cricket DB");

//console.log('the collection created is' + dbcollection);

