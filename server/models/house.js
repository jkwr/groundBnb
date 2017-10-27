const mongoose = require('mongoose'),
  Schema = mongoose.Schema;


const HouseSchema = new Schema({
  title: { type: 'String', required: true },
  photos: { type: 'String', required: true },
  bedrooms: { type: 'Number', required: true },
  bathrooms: { type: 'Number', required: true },
  user_id: { type: 'String', required: false },
  address: { type: 'String', required: true },
  description: { type: 'String', required: false },
  slug: { type: 'String', required: false },
  cuid: { type: 'String', required: false },
  markedForDeletion: {
    type: Boolean,
    default: false
  },

  // dateAdded: { type: 'Date', default: Date.now, required: true },
});




const House = mongoose.model('House', HouseSchema);

module.exports = House;
