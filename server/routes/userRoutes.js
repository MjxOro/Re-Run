const router = require("express").Router();
const User = require("../models/users");
const AdPost = require("../models/adPosts");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const axios = require("axios");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const sendBirdHeader = {
    headers: {
      "Content-Type": "application/json; charset=utf8",
      "Api-Token": process.env.SENDBIRD_API_KEY,
    },
  };

  try {
    const user = new User({
      username,
      email,
      password,
      profilePicture: `https://ui-avatars.com/api/?name=${username}`,
    });
    const token = await user.generateAuthToken();
    const sendBirdSignup = await User.findOne({ email: req.body.email });
    const formData = {
      user_id: sendBirdSignup._id,
      nickname: sendBirdSignup.username,
      profile_url: sendBirdSignup.profilePicture,
    };
    await axios
      .post(
        `https://api-${process.env.SENDBIRD_APP_KEY}.sendbird.com/v3/users/`,
        formData,
        sendBirdHeader
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "chat account not made");
      });
    res.status(201).json({ user, token });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.json({ user, token });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

module.exports = router;
