const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('TEST EDIYORUZ');
})


module.exports = router;