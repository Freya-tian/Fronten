const { createProxyMiddleware } = require('http-proxy-middleware');
console.log("Print setupProxy.js")
module.exports = function(app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'http://119.45.178.227:3002',
      changeOrigin: true,
    })
  );
};