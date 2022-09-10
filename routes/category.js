const express = require('express')
const router = express.Router()
const {getCategoryById,createCategory,getAllCategory,getCategory} = require("../controllers/category");
const {getUserById} = require("../controllers/user");
const {isSignedIn,isAuthenticated } = require("../controllers/auth");


// params 

router.param("userId",getUserById);
router.param("categoryId",getCategoryById);
router.post("/category/create/:userId",isSignedIn,isAuthenticated,createCategory);
router.get("/categories",getAllCategory);
router.get("/category:categoryId",getCategory);

module.exports = router;