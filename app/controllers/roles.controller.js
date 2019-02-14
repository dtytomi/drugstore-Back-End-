var Role = require('../models/role.model');

//Simple version, without validation or sanitation
exports.create = function (req, res) {
  var role = new Role(req.body);


  role.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: 'error'
      });
    } else {
      res.json(role);
    }
  });
};

/**
 * List of Role
 */
exports.list = function (req, res) {
  console.log(req.body);

  Role.find().sort('-created').populate('name', 'price').exec(function (err, drugs) {
    if (err) {
      return res.status(422).send({
        message: 'error'
      });
    } else {
      res.json(roles);
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
          res.json(role);
        }
      });
    }
  });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
  var role = req.role;

  role.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(role);
    }
  });
};
