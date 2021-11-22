const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: String,
  budget: String,
});

module.exports = mongoose.model('Category', categorySchema);