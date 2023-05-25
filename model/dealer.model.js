const mongoose = require('mongoose');

const dealerSchema = mongoose.Schema({
  name: {type: String,required: true},
  email: {type: String,required: true},
  password: {type: String,required: true},
  contactNumber: {type: Number,required: true},
  inventory: [{type: mongoose.Schema.Types.ObjectId,ref: 'MarketplaceInventory'}]
});

const Dealer = mongoose.model('Dealer', dealerSchema);

module.exports = Dealer;
