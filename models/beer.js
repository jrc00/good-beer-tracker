var mongoose = require('mongoose');

var BeerSchema   = new mongoose.Schema({
  name: { type: String, required: true },
  brewery: String,
  style: Number.
  location: {
    name: { type: String, required: true },
    address: String
  },
  rating: Number
});

module.exports = mongoose.model('Beer', BeerSchema);
