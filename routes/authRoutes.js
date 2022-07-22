const passport = require('passport');
//USING GOOGLE AUTH ROUTES

const authRoutes = (app) => {
  //AUTHENTICATE USES: STATEGY AND OPTIONS/SCOPE
  app.get('/auth/google', passport.authenticate('google', {
    scope: [ 'profile', 'email' ]
  })
  );
  

  //Google callback after login
  app.get( 
    '/auth/google/callback',
    passport.authenticate( 'google' ),
    ( req, res ) => {
      res.redirect('/');
    }
  );

  app.get('/api/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

  app.get('/api/current_user', ( req, res ) => {
    res.send( req.user );
  });

}

module.exports = { authRoutes };