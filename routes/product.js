const express = require("express");
const router = express.Router();


const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct,
  getAllProduct,
  getAllUniqueCategory
} = require("../controllers/product");
const {
  isSignedIn,
  isAuthenticated
} = require("../controllers/auth");
const {
  getUserById
} = require("../controllers/user");


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

router.get("product/:productId", getProduct);
router.get("product/photo/:productId", photo);
// delete
router.delete("product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  deleteProduct
  );

// update
router.put("product/:productId/:userId", updateProduct);
// listing
router.get("products", getAllProduct);
// get all unique category
router.get("products/categories", getAllUniqueCategory);

module.exports = router;