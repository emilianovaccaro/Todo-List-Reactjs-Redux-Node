const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models/User');


//Set up Passport.js for GoogleOauth20
passport.use( new GoogleStrategy( {
    clientID: '587322075166-bsfgrv1imb45o9dervd5ttkd90vvo6fu.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async ( accessToken, refreshToken, profile, done ) => {
    const existingUser = await User.findOne( { where: { id: profile.id }} );
    
    if( existingUser ) {
      return done( null, existingUser );
    };

    const user = await new User({ 
      id: profile.id,
      name: profile.displayName,
      email: profile._json.email
    })
    .save();

    done( null, user );
  }
  )
);


passport.serializeUser( ( user, done ) => {
  done( null, user.id );
});


passport.deserializeUser( ( id, done ) => {

  User.findByPk(id)
      .then( user => {
        done( null, user );
      });
});
