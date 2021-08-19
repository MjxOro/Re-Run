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
				{ id: user._id, email: user.email },
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
			{ id: user[0]._id , email: user[0].email },
			process.env.JWT_SECRET,
			{ expiresIn: "24h" }
		)
		res.status(201).json({ user, token })
	})
	.catch((err)=>{
		console.log('BRUH')
		res.status(400).json({ error: err.message })
	})
})

//Get Current User
router.get("/current", authorize, (req, res) => {
	User.find({ id: req.decoded.id }) //Query for db
		.then((user) => {
			console.log(user)
			const currentUser = { ...user, password: null };
			AdPost.where({ user_id: currentUser.id }) //Query for bd
				.fetchAll()
				.then((adPosts) => {
					res.status(200).json({ currentUser, adPosts });
				});
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
});

module.exports = router;
