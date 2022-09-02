const express = require('express');
const User = require('../models/userModel');
const passport = require("passport");
const router = express.Router();

const adminActions = [
  {
    actionId: 1,
    actionName: "changeHomeImage",
    displayName: "Change Home Image",
  },
  {
    actionId: 2,
    actionName: "changeAboutImage",
    displayName: "Change About Image",
  },
  {
    actionId: 3,
    actionName: "changeAboutText",
    displayName: "Change About Text",
  },
  {
    actionId: 4,
    actionName: "addNewBlog",
    displayName: "Add New Blog",
  },
  {
    actionId: 5,
    actionName: "listAllBlogs",
    displayName: "List All Blogs",
  },
];

router.get('/admin', (req, res)=> {
  res.render('admin', {adminActions});
});

router.get('/signin', (req, res)=>{
  res.render('admin/signin');
});

router.post('/signin', (req, res)=>{
 // res.redirect('/admin/dashboa');
})


router.get('/signup', (req, res)=>{
 res.render("admin/signup");
});

router.post("/signup", (req, res) => {
  let NewUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, (err, user) => {
    if(err) {
      console.log(err);
      res.redirect("/signup");
    }
    password.authenticate("local")(req, res, ()=> {
      res.redirect('/');
    });
  });
});


module.exports = router;