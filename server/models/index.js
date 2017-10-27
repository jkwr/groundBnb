var mongoose = require("mongoose");


mongoose.Promise = global.Promise;  // use native Promise

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/houses", {useMongoClient: true});




const House = require('./house');
const Review = require('./review');


module.exports.House = require("./house.js");
module.exports.Review = require("./review.js");