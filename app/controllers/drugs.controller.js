var Drug = require('../models/drugs.model');

//Simple version, without validation or sanitation
exports.create = function (req, res) {
  var drug = new Drug(req.body);

  console.log(req.body);
  
  drug.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: 'error'
      });
    } else {
      res.json(drug);
    }
  });
};

/**
 * List of Drugs
 */
exports.list = function (req, res) {
  Drug.find().exec(function (err, drugs) {
    if (err) {
      return res.status(422).send({
        message: 'error'
      });
    } else {
      res.json(drugs);
    }
  });
};


/**
 * Update an article
 */
exports.update = function (req, res) {
  var drug = req.drug;

   drug.findById(req.params.id, function (err) {
    if (!drug) {
      return res.status(422).send({
        message: 'error'
      });
    } else {
      
      drug.title = req.body.title;
      drug.content = req.body.content;

      drug.save(function (err) {
        if (err) {
          return res.status(422).send({
            message: 'error'
          });
        } else {
          res.json(drug);
        }
      });
    }
  });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
  var drug = req.drug;

  drug.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(drug);
    }
  });
};
