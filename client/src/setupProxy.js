const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google', '/api/todos', '/auth/google/callback'],
    createProxyMiddleware({
      target: 'http://localhost:8080',
    })
  );
};