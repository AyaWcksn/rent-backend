const express = require("express")
        , bodyParser = require('body-parser')
        , morgan = require("morgan")
        , cors = require("cors")

// Import modules
require('./lib/db')

var app = express()
var port = process.env.PORT || 8000

//Express config defaults
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Handling error in prod
app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
                'errors': {
                        message: err.message,
                        error: {}
                }
        });
});

//Test endpoint
app.get('/', function(req, res) {
        res.send("hello world!")
})

//Start the application
app.listen(port, () => {
        console.log("🚀 server running at: ", port)
})
