const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  // logs out user
  app.get('/api/logout', (req, res) => {
    // passport automatically attaches user to req
    req.logout();
    // should send back blank screen
    res.send(req.user);
  });

  // if user accesses this URI
  app.get('/api/current_user', (req, res) => {
    // Sends back the model of the user signed in
    // User object cookie (contains id, googleID, and _v)
    res.send(req.user);
  });
};
