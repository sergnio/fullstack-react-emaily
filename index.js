const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

// Object Data Moedling environment that wraps Node.js native driver to connect to mongo
mongoose.connect(keys.mongoURI);

// initalize our express app
const app = express();

// middleware
app.use(
  cookieSession({
    // creates expiry
    // 30 days - 24 hours in day, 60 minutes in hour, 60 seconds in minute, 1000 ms in second
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// sets an environment variable PORT, otherwise just uses default 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
