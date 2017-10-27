const db = require('../models');
const cuid = require('cuid');
const House = require('../models/house');









function reviewsForOneHouse(req, res) {


  console.log("this is my CUID", req.params.cuid )
  console.log('Review Results is getting data')
  let houseId;
  House.findOne({ cuid: req.params.cuid }).exec((err, house) => {
    if (err) {
      res.status(500).send(err);
    }
    houseId = house._id;
    console.log('THIS IS HOUSE ID', houseId)


    db.Review.find({house: houseId})
    .populate('house')
    .exec(function (err, allReviewsData) {
      console.log('allreviewdata', allReviewsData);
      let arrayOfReviewsMarkedForDeletion = [];
      allReviewsData.forEach( function(reviewData) {
        if ( reviewData.markedForDeletion === false ) {
          
        } else {
          arrayOfReviewsMarkedForDeletion.push(reviewData);
        }
        res.json(reviewData)
      });
    });
  });
};









function createReview(req, res) {
  console.log('createReview route is working');
  console.log(req.body)
  db.Review.create(req.body, function(err, newReview) {
    if (err) {
      console.log('ERROR ON CREATE', err)
    }
    res.json(newReview);
    console.log('NEW PROFILE INFO SENT BACK', newReview)
  })
};

function editReview(req, res) {
  console.log('editReview route is working');
};

function deleteReview(req, res) {
  console.log('deleteReview route is working');
  console.log('THIS IS THE REVIEW PARAM',req.params.houseId )
  db.Review.findByIdAndUpdate(req.params.houseId, {$set: {
    markedForDeletion: req.body.markedForDeletion
  }}, {new: true}, function(err, removedReview) {
      if (err) {
        console.log ('THERE WAS AN ERROR DURING deleteReview ', err);
      }
      console.log('deleteReview SAVED AND JSON SENT BACK ');
      res.json(removedReview);
    });
};

module.exports = {
  reviewsForOneHouse: reviewsForOneHouse,
  createReview: createReview,
  editReview: editReview,
  deleteReview: deleteReview,
};
