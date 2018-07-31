const Description = require('../database');

module.exports = {
  get: (req, res) => {
    Description.findOne({name: new RegExp(req.params.name, 'i')}, (err, description) => {
      if (err) res.status(400).send(err);
      else res.status(200).send(description);
    })
  },
  post: (req, res) => {
    new Description(req.body).save((err, posted) => {
      if (err) res.status(400).send(err);
      else res.status(201).send('posted');
    })
  },
};