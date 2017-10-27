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
  console.log(req)
  House.find().sort('-dateAdded').exec((err, houses) => {
    if (err) {
      res.status(500).send(err);
    }
    
    res.json({ houses });
  });
}

/**
 * Save a house
 * @param req
 * @param res
 * @returns void
 */
exports.addHouse = function (req, res) {
  if (!req.body.house.name || !req.body.house.title || !req.body.house.content) {
    res.status(403).end();
  }

  const newHouse = new House(req.body.house);

  // Let's sanitize inputs
  newHouse.title = sanitizeHtml(newHouse.title);
  newHouse.name = sanitizeHtml(newHouse.name);
  newHouse.content = sanitizeHtml(newHouse.content);

  newHouse.slug = slug(newHouse.title.toLowerCase(), { lowercase: true });
  newHouse.cuid = cuid();
  newHouse.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ house: saved });
  });
}

/**
 * Get a single house
 * @param req
 * @param res
 * @returns void
 */
exports.getHouse = function (req, res) {
  House.findOne({ cuid: req.params.cuid }).exec((err, house) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ house });
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
