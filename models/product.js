const { ObjectId } = require("mongoose");
var mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true,
        unique:true
    },
    description:{
        type: String,
        required: true,
        maxlength: 2000,
        trim: true
    },
    price:{
        type:Number,
        required: true,
        trim: true
    },
    category:{
        type:ObjectId,
        ref:"Category",
        required:true
    },
    stock:{
        type:Number,
        default:0
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data:Buffer,
        contentType:String
    }
},{timestamps:true});

module.exports = mongoose.model("Product",ProductSchema);