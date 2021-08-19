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
	User.where({ email: req.body.email })
	console.log(req.body)
	.fetch()
	.then((user) =>{
		const isMatch = bcrypt.compareSync(
			req.body.password,
			user.attributes.password
		)
		if(!isMatch){
			return res.status(400).json({ error: "Invalid credentials." })
		}

		const token = jwt.sign(
			{ id: user.id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: "24h" }
		)
		res.status(201).json({ user, token })
	})
	.catch((err)=>{
		res.status(400).json({ error: err.message })
	})
})

//Get Current User
router.get("/current", authorize, (req, res) => {
	User.where({ id: req.decoded.id }) //Query for db
		.fetch()
		.then((user) => {
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
