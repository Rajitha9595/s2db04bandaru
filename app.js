var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString = "mongodb+srv://rajitha:rajitha@cluster0.jr0lo.mongodb.net/rajitha?retryWrites=true&w=majority";
mongoose = require('mongoose');
mongoose.connect(connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true });

var Costume = require("./models/costume");
var Shoe = require("./models/shoe");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shoesRouter = require('./routes/shoes');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shoes', shoesRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter)
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Costume.deleteMany();

  let instance1 = new Costume({ costume_type: "Sri Anjaneya", size: 'medium', cost: 30 });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved in Costume")
  });

  let instance2 = new Costume({ costume_type: "Lord Sri Krishna", size: 'large', cost: 25 });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved in Costume")
  });

  let instance3 = new Costume({ costume_type: "Iron Man", size: 'medium', cost: 15.4 });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved in Costume")
  });

  let instance4 = new Costume({ costume_type: "wonderwomen", size: 'extraLarge', cost: 32.9 });
  instance4.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Fourth object saved in Costume")
  });

// Delete everything in Shoe
  await Shoe.deleteMany();

  let instance5 = new Shoe({ shoe_brand: "Nike", shoe_color: 'white', shoe_cost: 100 });
  instance5.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved in Shoe")
  });

  let instance6 = new Shoe({ shoe_brand: "Reebok", shoe_color: 'Black', shoe_cost: 85 });
  instance6.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved in Shoe")
  });

  let instance7 = new Shoe({ shoe_brand: "Puma", shoe_color: 'Rose Gold', shoe_cost: 76 });
  instance7.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved in Shoe")
  });

  let instance8 = new Shoe({ shoe_brand: "Adidas", shoe_color: 'Blue', shoe_cost: 84 });
  instance8.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Fourth object saved in Shoe")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () { console.log("Connection to DB succeeded") });