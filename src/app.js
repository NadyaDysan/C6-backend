const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const {
  PORT = 3005,
  API_URL = 'http://127.0.0.1',
  MONGO_URL = 'mongodb://127.0.0.1:27017/mydb',
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));

mongoose.connection.on('error', (err) => {
  console.log(err);
});

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(routes);

app.get('/', (request, response) => {
  response.status(200);
  response.send("Hello, World!");
});

app.use((req, res, next) => {
  res.status(404).send('404 - Resource Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server is running at ${API_URL}:${PORT}`);
});
