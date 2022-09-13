const express = require("express");
const router = express.Router();


const { getProductById } = require("../controllers/product");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");


//params
router.param("userId", getUserById);
router.param("productId", getProductById);


module.exports = router;