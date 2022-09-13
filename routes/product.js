const express = require("express");
const router = express.Router();


const { getProductById,createProduct } = require("../controllers/product");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");


//params
router.param("userId", getUserById);
router.param("productId", getProductById);

//actual routers goes here

//create
router.post(
    "/product/create/:userId",
    isSignedIn,
    isAuthenticated,
    createProduct
  );
module.exports = router;