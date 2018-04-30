//importing original passport module, not passport.js
const passport = require('passport');

//exporting these functions, going to assume it will be called with Express
//app object
module.exports = app => {
  //route handler that directs user to passport google OAuth flow
  //GoogleStrategy has 'google' reswerved as identifier, so when it sees it
  //it knows to use the GoogleStrategy passport
  //scope tells google what we want to access (i.e. their profile and email)
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //router handler to handle visits to /auth/google/callback
  //in this case, google code will be in URL
  //Passport will notice that and handle request differently
  app.get('/auth/google/callback', passport.authenticate('google'));

  //tester function for auth flow
  app.get('/api/current_user', (req, res) => {
    //sends back req.user
    res.send(req.user);
  });
};
