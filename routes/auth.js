const express = require('express')
const router = express.Router()
const {
  signout,
  signup
} = require("../controllers/auth")
const { check } = require('express-validator');

// signout

router.post('/signup', [
  check('name', "Name Should be at least 3 char")
  .isLength({
    min: 3
  }),
  check('email', "Email is required")
  .isEmail(),
  check('password', "password Should be at least 3 char")
  .isLength({
    min: 3
  }),

], signup);

router.get('/signout', signout);

module.exports = router;