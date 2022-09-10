const Category = require("../models/category");

exports.getCategoryById= (req,res,next,id)=>{
    Category.find(id).exec((err,category)=>{
        if(err){
            return res.send(400).json({
                error:"Category not found in DB"
            });
        }
        req.category = category;
        next();
    })
}


// create createCategory

exports.createCategory = (req,res)=>{
    const category = new Category(req.body);
    category.save((err,category)=>{
        if(err){
            return res.send(400).json({
                error:"Category not found in DB"
            });
        }
        res.json({category});
    });
   
};


// get all category

exports.getAllCategory = (req,res)=>{
    Category.find().exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                error: "No User Found in DB"
            });
        }
        return res.json(category);
    });
};


// get category specific

exports.getCategory = (req, res) => {
   
};