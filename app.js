var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.Promise = global.Promise;
var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

mongoose.connect('mongodb://localhost/cscfutsaldb', options, function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

var partidos = require('./routes/partidos');
var jugadores = require('./routes/jugadores');
var equipos = require('./routes/equipos');
var admin = require('./routes/admin');

app.use('/partidos', partidos);
app.use('/jugadores', jugadores);
app.use('/equipos', equipos);
app.use('/admin', admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log("ERROR -->" + err.message);
  console.log('PROMISE -->' + err.promise);
  console.log('TASK -->' + err.task);
  console.log('source url -->' +err.sourceUrl);
  console.log('type -->' + err.type);
  console.log('rejection' + err.rejection);
  res.render('error');
});

module.exports = app;
