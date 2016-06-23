var express = require("express");
var path = require("path");

//Dealing with changes during develpoment.
var config = require("../webpack.config.js");
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var webpack = webpack(config);

var app = express()
   .use(webpackDevMiddleware(webpack, {noInfo: true, publicPath: config.output.publicPath}))
   .use(webpackHotMiddleware(webpack))
   .use(express.static(__dirname + "/dist"))

   //load index.html by default
   .get("/", function(req, res) {
      res.status(200).sendFile(path.join(__dirname + "/client/index.html"));
   })

   .listen(3000, function(error) {
     if(error) throw console.error;
     console.log("Express server listening on port: 3000");
   });
