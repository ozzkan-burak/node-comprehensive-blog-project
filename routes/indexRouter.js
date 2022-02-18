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
})



module.exports = router;