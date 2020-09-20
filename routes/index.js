const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render('pages/home')
});

router.get("/blog", (req, res) => {
  res.render('pages/blog')
});

module.exports = router;