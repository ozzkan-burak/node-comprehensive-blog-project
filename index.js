const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

// middlewares
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//Routes
const indexRouter = require('./routes/indexRouter');
const adminRouter = require('./routes/adminRoutes');


const app = express();

//App config
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); //public folder

//Route using
app.use(indexRouter);
app.use(adminRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = 5000
 
app.listen(PORT, () => {
    console.log(`Server running on port : %d`, PORT);
});