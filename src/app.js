const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', bookRoutes);

module.exports = app;