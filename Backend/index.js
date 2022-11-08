const express = require('express');
const router = require('./Routes/users.route');
const cors = require('cors');

const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const PORT = 8000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, async () => {
  console.log(`server up n' runnin' on port ${PORT}`);
});

mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
