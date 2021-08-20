const router = require("express").Router()
const User = require("../models/users")
const AdPost = require("../models/adPosts")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const authorize = require("../middleware/authorize")




router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({
      username,
      email,
      password,
    });
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

//LOGIN user
//TODO: Verify that the user has entered the password associated with their account. Then, generate a JSON web token and send it with the response.
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

//==========================================================================================
//Get Current User
router.get("/current", authorize, (req, res) => {
	User.find({_id: req.decoded.id }) //Query for db
		.then((user) => {
			user[0].password = null
			currentUser = user[0]





			res.status(200).json({currentUser});
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

router.put("/upload", (req,res) =>{
	let profilePicture = req.files.profilePicture
	let uploadPath = __dirname + "/upload/" + profilePicture.name

	if(!req.files||Object.keys(req.files).length === 0){
		return res.status(400).json({message: "No files were uploaded"})
	}

	profilePicture.mv(uploadPath, function(err){
		if(err){
			return res.status(500).send(err)
		}
		res.send("File Uploaded!")
	})


})

module.exports = router;

