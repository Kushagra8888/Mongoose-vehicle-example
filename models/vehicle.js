var mongoose = require('mongoose');

var vehicleSchema = mongoose.Schema({
    name: String,
    color: String,
    wheels: {
      type: Number,
      default: 4
    }
});

vehicleSchema.methods.honk = function(){
    console.log( this.name + 'says HONK!');
};

var Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;