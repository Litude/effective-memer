const request = require('request');
var mongoose = require('mongoose');
var imageModel = require('./imageModel');

const maxEntries = 100;

function refreshData() {
  imageModel.db.dropDatabase(); //Get rid of all old entries
  
  for (var i = 0; i < 2; ++i) {
    var options = {
      url: 'https://api.imgur.com/3/gallery/hot/viral/day/' + i.toString() + '?showViral=true',
      headers: {
        'Authorization': 'Client-ID 24a5695b09de78c'
      }
    };
    request(options, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        parseData(body);
      }
    });
  }
}

function parseData(body) {
  if (!parseData.entries) {
    parseData.entries = 0;
  }
  data = JSON.parse(body).data;
  entriesToAdd = Math.min(maxEntries - parseData.entries, data.length);

  newData = data.slice(0, entriesToAdd);
  parseData.entries += newData.length;
  
  imageModel.insertMany(newData, function(error, docs) {
    if (parseData.entries == maxEntries) {
      console.log("Data refreshed");
    }
  });
}

module.exports = refreshData;
