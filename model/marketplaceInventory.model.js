
const mongoose = require('mongoose');

const marketplaceInventorySchema = mongoose.Schema({
  carDetails: {
    image: { type: String, required: true }, 
    title: { type: String, required: true }, 
    description: { type: [String], required: true }
   }, 
  kmsOnOdometer: { type: Number, required: true }, 
  majorScratches: { type: Boolean, default: false }, 
  originalPaint: { type: Boolean, default: true }, 
  accidentsReported: { type: Number, default: 0 }, 
  previousBuyers: { type: Number, default: 0 }, 
  registrationPlace: { type: String, required: true }, 
  dealer: { type: mongoose.Schema.Types.ObjectId, ref: 'Dealer' }, 
  oemSpecs: { type: mongoose.Schema.Types.ObjectId, ref: 'OEMSpecs' }
});

const MarketplaceInventory = mongoose.model('MarketplaceInventory', marketplaceInventorySchema);

module.exports = MarketplaceInventory;
