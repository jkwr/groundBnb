const House = require('../models/house');
const cuid = require('cuid');
const slug = require('limax');
const sanitizeHtml = require('sanitize-html');

/**
 * Get all houses
 * @param req
 * @param res
 * @returns void
 */


exports.getHouses = function (req, res) {
  console.log("houses being gotten")
  House.find().sort('-dateAdded').exec((err, houses) => {
    if (err) {
      res.status(500).send(err);
    }
    
    res.json({houses});
  });
}

/**
 * Save a house
 * @param req
 * @param res
 * @returns void
 */
exports.addHouse = function (req, res) {
  House.create(req.body, function(err, saved){
    if (err) res.send(err);
    else res.json(saved);
  });
}

/**
 * Get a single house
 * @param req
 * @param res
 * @returns void
 */
exports.getHouse = function (req, res) {
  House.findById(req.params.cuid).exec((err, sent) => {
    console.log(req.params.cuid)
    if (err) {
      res.status(500).send(err);
    }
    res.json(sent);
  });
}

/**
 * Delete a house
 * @param req
 * @param res
 * @returns void
 */
exports.deleteHouse = function (req, res) {
  House.findOne({ cuid: req.params.cuid }).exec((err, house) => {
    if (err) {
      res.status(500).send(err);
    }

    house.remove(() => {
      res.status(200).end();
    });
  });
}
