var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imgurdb', function(error) {
    if (error) {
        console.log("ERROR: Could not connect to database")
        process.exit(1);
    };
});
