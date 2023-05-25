const mongoose = require('mongoose');

const oemSpecsSchema = mongoose.Schema({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  listPrice: { type: Number, required: true },
  availableColors: { type: [String], required: true },
  mileage: { type: Number, required: true },
  power: { type: Number, required: true },
  maxSpeed: { type: Number, required: true }
});

const OEMSpecs = mongoose.model('OEMSpecs', oemSpecsSchema);

module.exports = OEMSpecs;
