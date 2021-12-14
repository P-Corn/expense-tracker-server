const Category = require('../models/Category');

module.exports = function(app) {
  app.post('/categories', async (req, res) => {
  try {
    const newCategory = await Category.create({...req.body});
    const savedCategory = await newCategory.save();
    res.send(savedCategory);
  } catch (err) { res.send(err); }
  })

  app.get('/categories', async (req, res) => {
    try {
      const categories = await Category.find();
      res.send(categories);
    } catch (err) { res.send(err); }
  })

  app.put('/categories', async (req, res) => {
    try {
      const updatedCategory = await Category.findOneAndUpdate(
        { _id: req.body.id },
        { 
          budget: req.body.budget,
          title: req.body.title,
        },
        { new: true }
        );
      res.send(updatedCategory);
    } catch (err) { res.send(err); }
  })

  app.delete('/categories', async (req, res) => {
    try {
      const deletedCategory = await Category.findByIdAndDelete(req.body.id);
      res.send(deletedCategory);
    } catch(err) { res.send(err); }
  })
}