const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const connectionString = 'mongodb+srv://peyton123:peyton1234@cluster0.e5iad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

MongoClient.connect(connectionString)
.then(client => {
  const db = client.db('expense-tracker');
  const expensesCollection = db.collection('expenses');

  app.post('/expenses', (req, res) => {
    expensesCollection.insertOne(req.body)
      .then(() => {
        res.send(req.body);
      })
      .catch(error => console.error(error))
  });
 
  app.get('/expenses', (req, res) => {
    db.collection('expenses').find().toArray()
      .then(results => {
        res.send(results);
      })
      .catch(error => console.error(error))
  });
})
.catch(error => console.error(error))

app.listen(3001, () => {
    console.log('running');
});