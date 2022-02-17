const mongoose = require('mongoose');
const express = require('express');

//Routes
const indexRouter = require('./routes/indexRouter');

const app = express();

//Route using
app.use(indexRouter);

//App config
const PORT = 5000
 
app.listen(PORT, () => {
    console.log(`Server running on port : %d`, PORT);
});