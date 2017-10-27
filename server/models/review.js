const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const House = require('./house');

const ReviewSchema = new Schema({
  house: {type: Schema.Types.ObjectId, ref: 'House'},
  title: String,
  photos: String,
  content: String,
  Rating: Number,
  user_id: String,
  slug: String,
  cuid: String,

  // dateAdded: { type: 'Date', default: Date.now, required: true },
});




const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
