//require express
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var dialog = require('dialog');

//create router object
var router = express.Router();

//route the requests
router.get('/', function(req, res) {
    res.render('pages/index');
});

//route to create defect page
router.get('/defect', function(req, res) {
    res.render('pages/defect');
});

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
router.get('/dashboard', function(req, res) {

    defectModel.find({}, function(err, defects) {
        if (err) throw err;
        res.render('pages/dashboard', {defects});
       // console.log(defects);

    });
});


//route to dashboard page
router.get('/modify', function(req, res) {

    defectModel.find({}, function(err, defects) {
        if (err) throw err;
        res.render('pages/modify', {defects});
        //console.log(defects);

    });
   
});

//export router file
module.exports = router;