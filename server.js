var express = require('express');
var app = express();
var db = require('./db');
var search_api = require('./search_api');
var metadata_downloader = require('./metadata_downloader');

var port = 8081;

metadata_downloader();
app.use('/search', search_api);

app.listen(port);
console.log('API server started on: ' + port);
