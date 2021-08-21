const router = require("express").Router();
const User = require("../../models/users");
const AdPost = require("../../models/adPosts")
const multer = require("multer") 
const upload = multer({dest: "public/"})
const fs = require("fs")

router.get("/current/user", async (req, res) => {
  console.log(req.decoded);
  try {
    const user = await User.findOne({ _id: req.decoded._id });
		console.log(req.decoded._id)
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
router.get("/user/posts", async (req,res) =>{
  try {
    const user = await AdPost.find({ owner: req.decoded._id });
		console.log(req.decoded._id)
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }

})

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
//Create an Posting
router.post("/add/post",upload.single('image'), async(req,res) =>{
	if(req.file){
		const deleteImg = await AdPost.findOne({_id: req.params.id},(err) =>{
			if(err){
				res.status(400).json({message: err + " ID NOT FOUND"})
			}
		})
		const imgId = deleteImg.image.split("/")
		fs.unlink("../../public/" + imgId[imgId.length-1])
	}

	const imgUrl = req.file ? process.env.SERVER_URL + req.file.filename : process.env.SERVER_URL + 'null'
	const {title, price, location, category, description, premium} = req.body
	const adPost =  new AdPost({
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

// PUT REQUEST
router.put("/edit/post/:id",upload.single('image'), async(req,res) =>{
		let putRequest = []
		putRequest.push({...req.body, image: process.env.SERVER_URL+req.file.filename})
		putRequest.forEach(el => {
		Object.keys(el).forEach(key => {
			if (el[key] === null || el[key] === undefined || el[key] === 'null' || el[key] === 'undefined' ) {
				delete el[key];
				}
			});
		});
		console.log(putRequest)
		const adPost = await AdPost.findOneAndUpdate({_id: req.params.id},putRequest[0], (err) =>{
			if(err){
				res.status(400).json({message: err})
			}
			console.log("DB Put requested")
		})
		adPost.save()
		res.status(201).json(adPost)
})
//DELETE
router.delete("/delete/post/:id", async(req,res) =>{
	const deleteImg = await AdPost.findOne({_id: req.params.id},(err) =>{
		if(err){
			res.status(400).json({message: err + " ID NOT FOUND"})
		}
	})
	const imgId = deleteImg.image.split("/")
	fs.unlink("../../public/" + imgId[imgId.length-1])

	const adPost = await AdPost.findOneAndRemove({_id: req.params.id},(err) =>{
		if(err){
			res.status(400).json({message: err + " ID NOT FOUND"})
		}
	})
	res.status(200).json({message: "Post Deleted"})
})

//GET all Posts
router.get("/all/postings", async (req, res) => {
  try {
    const adPosts = await AdPost.find()
      .populate("owner")
      .exec((err, adPosts) => {
        res.json(adPosts);
      });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = router;

