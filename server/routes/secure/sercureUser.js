const router = require("express").Router();
const User = require("../../models/user");

//Get Current User
//TODO: Write a middleware function in server/middleware/authorize.js to verify that a user has sent their JSON web token in the authorization headers of their request, and that it is valid. Invoke the middleware function.
router.get("/current", async (req, res) => {
  console.log(req.decoded);
  try {
    const user = await User.findOne({ _id: req.decoded._id });

    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

//GET all users
router.get("/all/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

//GET tasks with user
router.get("/all/tasks", async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("owner")
      .exec((err, tasks) => {
        res.json(tasks);
      });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = router;

