const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No User Found in DB"
            });
        }
        req.profile = user;
        next();
    })
};


exports.getUser = (req,res)=>{
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.encry_password = undefined;
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined;

    return res.json(req.profile);
}

// get all users

exports.getAllUsers = (req,res)=>{
    User.find().exec((err, users) => {
        if (err || !users) {
            return res.status(400).json({
                error: "No User Found in DB"
            });
        }
        return res.json(users);
    })
}

// update user

exports.getUpdateUser = (req,res)=>{
    User.findByIdAndUpdate(
        {_id:req.profile._id},
        {$set:req.body},
        {new:true,useFindAndModify:false},
        (err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"You are not authorized to update this user"
                });
            }
            user.salt = undefined;
            user.encry_password = undefined;
            user.encry_password = undefined;
            user.createdAt = undefined;
            user.updatedAt = undefined;
            return res.json(user);
        }
    )
}