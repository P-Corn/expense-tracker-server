const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// Schemas
const Expense = require('./models/Expense');

app.use(cors());
app.use(bodyParser.json());

const connectionString = 'mongodb+srv://peyton123:peyton1234@cluster0.e5iad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(connectionString);

  app.post('/expenses', async (req, res) => {
    try {
      const newExpense = await Expense.create({...req.body});
      const savedExpense = await newExpense.save();
      res.send(savedExpense);
    } catch (err) { res.send(err); }
  });

  app.get('/expenses', async (req, res) => {
    try {
      const expenses = await Expense.find();
      res.send(expenses);
    } catch (err) { res.send(err); }
  });

  app.delete('/expenses', async (req, res) => {
    try {
      const deletedExpense = await Expense.findByIdAndDelete(req.body.id);
      res.send(deletedExpense);
    } catch(err) { res.send(err); }
  });
}

app.listen(3001, () => {
    console.log('running');
});