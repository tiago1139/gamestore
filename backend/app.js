var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');

var listRouter = require('./routes/list');

var itemsRouter = require('./routes/items');
var itemRouter = require('./routes/item');

//var userProfileRouter = require('./routes/user-profile');

var avalsRouter = require('./routes/avaliacoes');
var avalRouter = require('./routes/avaliacao');



var app = express();
app.use(cors());

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://psi012:psi012@localhost:27017/psi012?retryWrites=true&authSource=psi012';
//var mongoDB = 'mongodb+srv://psi012:Pk7J1FAOmE5USXZy@cluster0.i9itr.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('connected', () => {
  console.log("Database Connected !");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/lists', listRouter);
app.use('/items', itemsRouter);
app.use('/item', itemRouter);
app.use('/avaliacoes', avalsRouter);
app.use('/avaliacao', avalRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
