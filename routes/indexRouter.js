const express = require('express');
const router = express.Router();

const data = require ('../dummy/data');

router.get('/', (req, res)=>{
  res.render('home', {data});
});

router.get('/about', (req, res)=>{
  res.render('about');
});

router.get('/contact', (req, res)=>{
  res.render('contact');
});

router.get('/resume', (req, res)=>{
  res.render('resume');
});

router.get('/signin', (req, res)=>{
  res.render('admin/signin');
})



module.exports = router;