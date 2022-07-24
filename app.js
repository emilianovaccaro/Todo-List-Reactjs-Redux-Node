//Aca voy a setear mi servidor
const express = require('express');
const session = require('express-session');
const cors = require('cors'); 

//services
const passport = require('passport');
require('./services/passport');

//routes
const { authRoutes } = require('./routes/authRoutes');
const { todoRoutes } = require('./routes/todoRoutes')

//app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use(session({
   secret: 'somethingsecretgoeshere',
   resave: false,
   saveUninitialized: true,
   cookie: { maxAge:  ( 30 * 24 * 60 * 60 * 1000 ) }
}));

app.use( passport.initialize() );
app.use( passport.session() );

authRoutes(app);
app.use("/api/todos", todoRoutes);




module.exports = {
  app
};