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
    return res.json(req.profile);
}