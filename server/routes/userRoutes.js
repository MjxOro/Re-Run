const router = require("express").Router()
const User = require("../models/users")
const AdPost = require("../models/adPosts")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const authorize = require("../middleware/authorize")

//Resiter new user

router.post("/register",(req,res)=>{
	const { password } = req.body
	bcrypt.hash(password, 8).then((hashedPassword)=>{
		new User({...req.body, password: hashedPassword})
		.save()
		.then((user)=>{
			const token = jwt.sign(
				{ id: user.id, email: user.email },
				process.env.JWT_SECRET,
				{ expiresIn: "24h" }
			)
			res.status(201).send({user,token})
		})
		.catch((err)=>{
			res.status(400).send({error: err.message})
		})
	})
})

	//Login user
router.post("/login", async(req,res)=>{
	User.find({ email: req.body.email })
	.then((user) =>{
		const isMatch = bcrypt.compareSync(
			req.body.password,
			user[0].password
		)
		if(!isMatch){
			return res.status(400).json({ error: "Invalid credentials." })
		}

		const token = jwt.sign(
			{ id: user[0].id , email: user[0].email },
			process.env.JWT_SECRET,
			{ expiresIn: "24h" }
		)
		res.status(201).json({ user, token })
		console.log(token)
	})
	.catch((err)=>{
		res.status(400).json({ error: err.message })
	})
})

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
