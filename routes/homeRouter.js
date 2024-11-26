const express = require('express');
const URL = require('../models/url')
const router = express.Router();

router.get('/', async (req, res) => {
  if (!req.user) return res.redirect('/login');
  const allData = await URL.find({createdBy : req.user._id});
  res.render("home", {
    urls : allData,
  });
});

router.get('/sign-up', (req, res) => {
  res.render("signup");
});

router.get('/login', (req, res) => {
  res.render("login");
})

module.exports = router;