"use strict";

var express = require("express");
var http = require("http");
var app = express();
app.use(express.static('dist'));

var options = {
  host: 'localhost',
  port: (process.env.PORT || 2323)
};

http.get(options, function (res) {
  if (window.location.href.indexOf('localhost') < 0) {
    window.location = 'http://'+options.host+':'+options.port;
  }
}).on('error', function (e) {
  app.listen(options.port, function (err) {
    if (err != null) {
      console.error(err);
      return;
    }
    if (window.location.href.indexOf('localhost') < 0) {
      window.location = 'http://'+options.host+':'+options.port;
    }
  });
});
