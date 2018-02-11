var express = require('express');
var router = express.Router();
var imageModel = require('./imageModel');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

router.get('/', function(req, res){
    res.send([]);
});

router.get('/:string', (req, res) => {
    const searchString = req.params.string;
    var keywords = searchString.split(" ");
    const details = { $or : [ { "tags.name" : { $in: keywords } }, { "title" : { $regex: searchString, '$options' : 'i' } } ] };
    imageModel.find(details).exec(function (err, docs) {
        if (req.query.callback) {
            res.send(req.query.callback + '(' + docs + ')');
        } else {
            res.send(docs);
        }
    });
});

module.exports = router;
