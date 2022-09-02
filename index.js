const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const expressSession = require('express-session');
require('dotenv').config()
const User = require('./models/userModel');

// middlewares
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//Routes
const indexRouter = require('./routes/indexRouter');
const adminRouter = require('./routes/adminRoutes');


const app = express();

//App config
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); //public folder
app.use(bodyParser.urlencoded({ extended: true }));

//Passport config
app.use(require("express-session")({
    secret: "This is a secret message",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//Route using
app.use(indexRouter);
app.use(adminRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = 5000
 
app.listen(PORT, () => {
    console.log(`Server running on port : %d`, PORT);
});
