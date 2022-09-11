//import express
const express = require('express')

const port = 8000;
const app = express();

//connect to mongoose
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config')
require('./routes/jokes.routes')(app)

app.listen(port, () => console.log(`You have entered the chamber: ${port}, protect ya neck`));