const Expense = require('../models/Expense');

module.exports = function(app) {
  app.post('/expenses', async (req, res) => {
  try {
    const newExpense = await Expense.create({...req.body});
    const savedExpense = await newExpense.save();
    res.send(savedExpense);
  } catch (err) { res.send(err); }
  })

  app.get('/expenses', async (req, res) => {
    try {
      const expenses = await Expense.find().sort({date: -1});
      res.send(expenses);
    } catch (err) { res.send(err); }
  })

  app.put('/expenses', async (req, res) => {
    try {
      const updatedExpense = await Expense.findOneAndUpdate(
        { _id: req.body.id },
        { 
          amount: req.body.amount,
          title: req.body.title,
          description: req.body.description,
          category: req.body.category,
          date: req.body.date
        },
        { new: true }
        );
      res.send(updatedExpense);
    } catch (err) { res.send(err); }
  })

  app.delete('/expenses', async (req, res) => {
    try {
      const deletedExpense = await Expense.findByIdAndDelete(req.body.id);
      res.send(deletedExpense);
    } catch(err) { res.send(err); }
  })
}