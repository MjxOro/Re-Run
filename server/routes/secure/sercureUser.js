const router = require("express").Router();
const User = require("../../models/users");
const AdPost = require("../../models/adPosts")
const multer = require("multer") 
const upload = multer({dest: "public/"})

router.get("/current/user", async (req, res) => {
  console.log(req.decoded);
  try {
    const user = await User.findOne({ _id: req.decoded._id });

    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/all/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

router.put("/upload", (req,res) =>{


})
router.post("/add/post",upload.single('image'), async(req,res) =>{
	const imgUrl = process.env.SERVER_URL + req.file.filename
	const {title, price, location, category, description, premium} = req.body
	const adPost = new AdPost({
		image: imgUrl,
		title,
		price,
		location,
		category,
		description,
		premium,
		owner: req.decoded._id,
	})
	adPost.save()
	res.status(201).json(adPost)

})

//GET tasks with user
router.get("/all/adPosts", async (req, res) => {
  try {
    const adPosts = await adPost.find()
      .populate("owner")
      .exec((err, adPosts) => {
        res.json(adPosts);
      });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = router;

