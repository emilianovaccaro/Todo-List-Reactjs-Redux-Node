
if( process.env.NODE_ENV === 'production' ) {
  //prod keys
  module.exports = require('./prod');
} else {
  //dev 
  module.exports = require('./dev'); 
}