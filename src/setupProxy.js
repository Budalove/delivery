const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1',
            changeOrigin: true,
        })
    );
};