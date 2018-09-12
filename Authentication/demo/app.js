var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user");

var app = express();
app.use(require("express-session")({
    secret: "Rainforest is the best",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/auth_demo_app");

app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!", 
    resave: false,
    saveUnitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes


app.get("/", function(req, res) {
    res.render("home");
});

app.post("/register", function(req, res) {
   User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
      if(err) {
          console.log(err);
          return res.render('register');
      } 
      passport.authenticate("local")(req, res, function() {
          res.redirect("/secret");
      })
   });
});

app.get("/secret", function(req, res) {
    res.render("secret");
});

// auth routes
// show sign up form
app.get("/register", function(req, res) {
   res.render("register"); 
});

// login routes
app.get("/login", function(req, res) {
   res.render("login"); 
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res) {
    
});


app.get("/secret", isLoggedIn, function(req, res) {
   res.render("secret"); 
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.get("/logout", function(req, res) {
   req.logout();
   res.redirect("/");
});
    


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server started ....");
});