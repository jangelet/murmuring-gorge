const passport = require('passport');
//only care about strategy, so .strategy instead of entire module
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//import keys
const keys = require('../config/keys');
//import mongoose
const mongoose = require('mongoose');

//model class for users
const User = mongoose.model('users');

//passport.use - "new strategy available, here it is and use it"
//creates new instance of GoogleStrategy --
//takes in clientID, secret, and callback URL that is route user is sent
//to after being granted permissions to the app
//pass in arrow function as second argument
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      //look through users collection for existing record with passed in ID
      //returns promise, .then takes in arrow func with whatever user was found
      //existingUser is model instance that representes found user (if any)
      User.findOne(profile.id).then(existingUser => {
        if (existingUser) {
          //user already is in collection
        } else {
          //no record - takes model instance and saves it to DB
          new User({ googleId: profile.id }).save();
        }
      });
    }
  )
);
