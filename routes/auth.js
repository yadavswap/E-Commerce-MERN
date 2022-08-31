const express = require('express')
const router = express.Router()

// logout
router.get('/logout', (req, res) => {
    res.send('User logout!')
  })

  module.exports = router;