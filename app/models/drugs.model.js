var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var DrugsSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Drug', DrugsSchema);