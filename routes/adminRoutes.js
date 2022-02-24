const express = require('express');
const router = express.Router();

router.get('/signin', (req, res)=>{
  res.render('admin/signin');
});

router.post('/signin', (req, res)=>{
 // res.redirect('/admin/dashboa');
})


router.get('/signup', (req, res)=>{
  res.send('Sşng Up Page not used');
})


module.exports = router;