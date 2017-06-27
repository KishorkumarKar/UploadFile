var express=require('express'),   //framework for node
    path        = require('path'),  //to manage path
    morgan      = require('morgan'),  //HTTP request logger middleware for node.js
    bodyParser	= require('body-parser');  //to handle form data

var app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000,function(req,res){
  console.log("listening server 3000..");
});
require('./routs/rout.js')(app);

module.exports = app;
