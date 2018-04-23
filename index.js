//import Express, Mongoose
const express = require('express');
const mongoose = require('mongoose');
//contains secret info
const keys = require('./config/keys');
//will load User.js when first boots up -- need to require model first
require('./models/User');
//imports google strategy we've defined
require('./services/passport');

//connect to mongoDB
mongoose.connect(keys.mongoURI);

//create express application
//represents running express app
const app = express();

//1st parentheses returns function, 2nd immediately calls it with app as arg
require('./routes/authRoutes')(app);

//if there isn't an environment variable already defined by heroku,
//then use 5000 by default
const PORT = process.env.PORT || 5000;

//Express tells Node it wants to listen for inc. traffic on port 5000
app.listen(PORT);
