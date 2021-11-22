const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
const expenseRoutes = require('./routes/expenseRoutes')(app);
const categoryRoutes = require('./routes/categoryRoutes')(app);

const connectionString = 'mongodb+srv://peyton123:peyton1234@cluster0.e5iad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(connectionString);
  expenseRoutes;
  categoryRoutes;
}

app.listen(3001, () => { console.log('running'); });