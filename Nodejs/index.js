const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => console.log('server started at port: 3000'));

app.use('/employees', employeeController);