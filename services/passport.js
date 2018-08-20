const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  // set default params for googl OAuth
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // if google already exists in the DB
      User.findOne({ googleID: profile.id }).then(existingUser => {
        // we already have a record with the given profile ID
        if (existingUser) {
          // we don't already have a record - create new record
          done(null, existingUser);
        } else {
          // create a new user and save it into the DB
          new User({ googleID: profile.id })
            .save()
            // no errors occured
            .then(user => done(null, user));
        }
      });
    }
  )
);
