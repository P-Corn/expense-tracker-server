const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: String,
  title: String,
  description: String,
  category: String,
  date: Date
});

module.exports = mongoose.model('Expense', expenseSchema);