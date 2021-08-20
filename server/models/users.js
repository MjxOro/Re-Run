const mongoose = require('mongoose')
const mongo = require('mongodb')

const UserSchema = mongoose.Schema({
	timeCreated:{
		type: Date,
		default: Date.now(),
	},
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	profilePicture: {
		type: String,
		default: "",
	}

})

 module.exports = mongoose.model('Users', UserSchema)
