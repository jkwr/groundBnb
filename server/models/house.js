const mongoose = require('mongoose'),
  Schema = mongoose.Schema;


const HouseSchema = new Schema({
  title: String,
  photos: String ,
  bedrooms: Number,
  bathrooms: Number,
  lat: Number,
  lng: Number,
  user_id: String ,
  address: String,
  description: String ,
  slug: String ,
  cuid: String ,
  markedForDeletion: {
    type: Boolean,
    default: false
  },

  // dateAdded: { type: 'Date', default: Date.now},
});




const House = mongoose.model('House', HouseSchema);

module.exports = House;
