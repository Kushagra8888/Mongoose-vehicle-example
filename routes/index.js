var express = require('express');
var router = express.Router();
var Vehicle = require('../models/vehicle');

/* GET home page. */
router.get('/', function(req, res, next) {
  Vehicle.find(function(err, vehicles){
    //make each vehicle honk
    for (var i = 0; i < vehicles.length; i++) {
      vehicles[i].honk();
    }
    res.render('index', {
      title: 'Express',
      vehicles: vehicles
    });
  });
});

router.get('/newVehicle', function(req, res) {
  var vehicleName = req.query.name;
  var vehicleColor = req.query.color;
  
  //Create a new vehicle object
  var newVehicle = new Vehicle({
    name: vehicleName,
    color: vehicleColor
  });

  //Store it in the database
  newVehicle.save(function(err, savedVehicle){
    console.log(err);
    console.log(JSON.stringify(savedVehicle));

    //redirect back to the homepage
    res.redirect('/');
  });
});

router.get('/view', function(req, res) {
  Vehicle.find(function(err, vehicles){
    res.send(vehicles);
  });
})

module.exports = router;
