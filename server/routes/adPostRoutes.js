const router = require("express").Router();
const User = require("../models/users");
const AdPost = require("../models/adPosts");

router.get("/", async (req, res) => {
  try {
    const allAds = await AdPost.find();
    res.json(allAds);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
