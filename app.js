const mongoose = require("mongoose");
const express = require("express");
const app = express();
mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=>{
    console.log("Db Connected")
});


const port = 8000;
app.listen(port,()=>{
    console.log(`App runing on port ${port}`);
})
