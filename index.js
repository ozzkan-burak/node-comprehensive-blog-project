const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

//Routes
const indexRouter = require('./routes/indexRouter');
const adminRouter = require('./routes/adminRoutes');

const app = express();

//Route using
app.use(indexRouter);
app.use(adminRouter);

//App config
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); //public folder

const PORT = 5000
 
app.listen(PORT, () => {
    console.log(`Server running on port : %d`, PORT);
});