const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  codes: [{ type: String }],
  images: [{ type: String }]
});

module.exports = mongoose.model('List', listSchema);
