const product = require("../models/product");

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
