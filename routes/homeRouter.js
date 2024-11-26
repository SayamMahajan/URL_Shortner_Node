const express = require('express');
const URL = require('../models/url')
const router = express.Router();

router.get('/', async (req, res) => {
  const allData = await URL.find({});
  res.render("home", {
    urls : allData,
  });
})

module.exports = router;