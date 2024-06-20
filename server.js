const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models'); // Make sure this path is correct

db.sequelize.sync();
/*
// Routes
require('./routes/product.routes')(app);
*/

app.get('/', (req, res) => {
  res.send('Hello, Welcome to Singapore!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
