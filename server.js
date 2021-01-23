var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    session = require("express-session");
    User = require('./models/user');

const PORT = process.env.PORT || 3002;
mongoose.connect("mongodb://localhost:27017/auth_demo_app", { useNewUrlParser: true, useUnifiedTopology: true });
var app = express();
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(express.static("client/public"));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "I'm a master",
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());


const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});