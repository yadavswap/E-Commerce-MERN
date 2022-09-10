const express = require('express')
const router = express.Router()

const {getUserById,getUser,getAllUsers,getUpdateUser,userPurchaseList} = require("../controllers/user");
const {isSignedIn,isAuthenticated,isAdmin } = require("../controllers/auth");


router.param("userId",getUserById);
router.get("/user/:userId",isSignedIn,isAuthenticated,getUser);
router.get("/users",getAllUsers);
router.put("/user/update/:userId",isSignedIn,isAuthenticated,getUpdateUser);
router.get("/orders/user/:userId",isSignedIn,isAuthenticated,userPurchaseList);

module.exports = router;