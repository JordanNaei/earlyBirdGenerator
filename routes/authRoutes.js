const router = require("express").Router();
const db = require("../models");


// ===================
//     ROUTES
// ===================



// app.get("/", function (req, res) {
//   res.render("home");
// });

// app.get("/secret", isLoggedIn, function (req, res) {
//   res.render("secret");
// });

// app.get("/register", function (req, res) {
//   res.render("register");
// });

// // handeling user sign up
// app.post("/register", function (req, res) {
//   User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
//     if (err) {
//       console.log(err);
//       return res.render("register");
//     }
//     passport.authenticate("local")(req, res, function () {
//       res.json(res)
//     });
//   });
// });

// // Login Form
// app.get("/login", function (req, res) {
//   res.render("login");
// });

// app.get("/error", function (req, res) {
//   res.render("error");
// });

// app.post("/login", passport.authenticate("local", {
//   successRedirect: "/secret",
//   failureRedirect: "/error"
// }));

// // Logout
// app.get("/logout", function (req, res) {
//   req.logout();
//   res.redirect("/");
// });

// // check isLoggedIn
// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// }



module.exports = router;
