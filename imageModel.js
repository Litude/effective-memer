var mongoose = require('mongoose');

var schema = new mongoose.Schema({ id: 'string' }, { strict: false });;
var imageModel = mongoose.model('Image', schema);

module.exports = imageModel;
