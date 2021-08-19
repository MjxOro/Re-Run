const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const AdPostSchema = mongoose.Schema({
	
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	premium: {
		type: Boolean,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},

})

 module.exports = mongoose.model('AdPosts', AdPostSchema)
