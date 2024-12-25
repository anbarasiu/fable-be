const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const positionRoutes = require('./routes/positionRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api', bookRoutes);
app.use('/api', positionRoutes);

module.exports = app;