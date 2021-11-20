const express = require("express")
const bodyParser = require('body-parser')
const morgan = require("morgan")
const cors = require("cors")

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
app.listen(port)
console.log("Application running at: ", port)
