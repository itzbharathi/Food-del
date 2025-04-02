const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
  rating: { type: Number, required: true },
  reviewText: { type: String, required: true },
  media: [{ type: String }] // Array to store media URLs
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);
