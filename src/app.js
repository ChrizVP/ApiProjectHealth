const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/person', require('./routes/person.routes'))
app.use('/api/measurement', require('./routes/measurement.routes'))

module.exports = app;