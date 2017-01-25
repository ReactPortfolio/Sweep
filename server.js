var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new webpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    contentBase: 'dist',
    publicPath: config.output.publicPath
}).listen(8080, 'localhost', function(err, result) {
   if (err) {
       return console.log(err);
   }
   console.log('Server started at http://localhost:8080/')
});