// import
const express = require("express");
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require("morgan");

const app =express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

//route
app.get('/',(req,res)=>{
    res.send("welcome...");
   })

app.get('/movie',(req,res)=>{
 res.send("movies from server...")
})
module.exports=app;