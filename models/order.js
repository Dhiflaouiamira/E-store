const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const orderSchema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['created', 'canceled'],
    default: 'created'
  },
  total: {
    type: Number,
    required: true
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
