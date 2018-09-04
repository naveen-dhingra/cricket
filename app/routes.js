//require express
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var dialog = require('dialog');
var passport = require('passport');

//create router object
var router = express.Router();

//route the requests
router.get('/', function(req, res) {
    var loggedin = req.isAuthenticated();
    var userlogged = req.user;
    console.log('User name is' + userlogged);
    res.render('pages/index', {userlogged, loggedin});
    console.log('User is logged in' + loggedin);
});

// Login a user
router.get('/login', (req, res) => {
    // render the page and pass in any flash data if it exists
     res.render('pages/login', { message: req.flash('loginMessage'),
     loggedin: req.isAuthenticated()}); 
  });

//sign up a user
router.get('/signup', (req, res) => {
    // render the page and pass in any flash data if it exists
     res.render('pages/signup', { message: req.flash('signupMessage'),
     loggedin: req.isAuthenticated()}); 
  });
  
// process the signup form
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

// process the login form
router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/defect', isLoggedIn, function(req, res) {
    res.render('pages/defect', {
        loggedin: req.isAuthenticated() // get the user out of session and pass to template
    });
});

// Log a user out
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect("/");
  });

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

//schema for mongoose
var defectSchema = new mongoose.Schema({ 
    summary: {type: String},
    severity: {type: String},
    assignedto: {type: String},
    status: {type: String},
    description: {type: String}
    });

var defectModel = mongoose.model('defectModel', defectSchema); 


// //route for defect created and submited to DB
// var defectList = moongose.model('defectscollection');


router.post('/defect', function (req, res) {
    console.log(req.body);

    var defect1 = new defectModel({
        summary: req.body.summary,
        severity: req.body.severity,
        assignedto: req.body.assignedto,
        status: req.body.Status,
        description: req.body.description
      });

      defect1.save(function(err) {
        
        if (err) throw err; 
        //dialog.info('Defect logged successfully!');
        
        res.redirect('/defect');

        console.log('Defect logged successfully!');
        console.log('Defect logged is :' + req.body.Status + req.body.severity);
      });


});

//route to dashboard page
router.get('/dashboard',isLoggedIn, function(req, res) {

    defectModel.find({}, function(err, defects) {
        if (err) throw err;
        res.render('pages/dashboard', {defects,
            loggedin: req.isAuthenticated()});
       // console.log(defects);

    });
});


//route to dashboard page
router.get('/modify',isLoggedIn, function(req, res) {

    defectModel.find({}, function(err, defects) {
        if (err) throw err;
        res.render('pages/modify', {defects,
            loggedin: req.isAuthenticated()});
        //console.log(defects);

    });
   
});

//export router file
module.exports = router;