const mongoose = require('mongoose');
const express = require('express');

//Routes
const indexRouter = require('./routes/indexRouter');

const app = express();

//Route using
app.use(indexRouter);

//App config
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); //public folder

const PORT = 5000
 
app.listen(PORT, () => {
    console.log(`Server running on port : %d`, PORT);
});