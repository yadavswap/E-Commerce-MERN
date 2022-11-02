const express = require("express");
const router = express.Router();

// const {getAllUsers} = require("../controllers/user");

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct,
  getAllProduct,
  getAllUniqueCategory,
  test
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
router.delete("/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  deleteProduct
  );
// dlete
// router.get('test',test)

// update
router.put("product/:productId/:userId", updateProduct);
// listing
// router.get("products", getAllProduct);
router.get("/products",getAllProduct);

router.get("products/categories", getAllUniqueCategory);


// router.get("/test",(req,res)=>{
//   res.json({ message: "Hello World." });
// })

module.exports = router;