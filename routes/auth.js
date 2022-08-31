const express = require('express')
const router = express.Router()
const {signout} = require("../controllers/auth")
// signout


router.get('/signout',signout);

  module.exports = router;