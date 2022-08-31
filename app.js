const mongoose = require("mongoose");
const express = require("express");
var bodyParser = require('body-parser')
var cors = require('cors')
var cookieParser = require('cookie-parser')

const app = express();

require('dotenv').config()

mongoose.connect(process.env.DATABSE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=>{
    console.log("Db Connected")
});
// middleware
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())


const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`App runing on port ${port}`);
})
