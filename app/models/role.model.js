const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RoleSchema = new Schema({
  name: { type: String, required: true, max: 20 },
  description: {type: String, required: true}
});

module.exports = mongoose.model('Role', RoleSchema);