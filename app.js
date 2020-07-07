//import modules
const express = require('express');
const app = require('./server');
const path = require('path');
require('./Database/connection')

//set public path
app.use(express.static(path.join(__dirname, 'public')));

//set view settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//import routes
require('./routes/routes')

