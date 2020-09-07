const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://www.canada-sp.com',
            changeOrigin: true,
            logLevel: "info"
        })
    );
};