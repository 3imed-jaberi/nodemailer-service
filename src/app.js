const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const path = require('path');

// The first version of the route ..
const routes = require('./routes/routes');

const app = express();

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Middlewares ... 
app.use(logger('dev')); 
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname, 'assets')));

// Routes ...
app.use('/',routes);


// Errors ...

// 404 Not Found .. 
app.use((req,res,next) => {
  var err = new Error('Not Found Directory');
  err.status = 404;
  next(err);
});

// errors handling ..
app.use((err,req,res,next) => {
  const status = err.status || 500 ;
  const error = err.message || 'Error processing your request' ;

  res.status(status).json({error});
});


module.exports = app ;