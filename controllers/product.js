const product = require("../models/product");
const formidable = require('formidable');
const _ = require("lodash");
const fs = require("fs")

exports.getProductById = (req, res, next, id) => {
  product.findById(id).exec((err, pro) => {
    if (err) {
      return res.status(400).json({
        error: "Product not found in DB",
      });
    }
    req.category = pro;
    next();
  });
};


exports.createProduct = (req,res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req,(err,fields,file)=>{
        if (err) {
            return res.status(400).json({
              error: "Problem with image",
            });
          }
        //   destrcture the fields

        const {name,description,price,category,stock} = fields;
        if(!name || !description || !price || !category || !stock){
            return res.status(400).json({
                error:"please include all fields"
            });
        }
        //   restrication on field
        let product = new Product(fields)

        // handle file here
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error:"file size too big"
                })
            }

            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type
        }

        // save db
        product.save((err,product)=>{
            if (err) {
                return res.status(400).json({
                  error: "Product saving in DB failed",
                });
              }
              res.json(product)
        })
    })
}