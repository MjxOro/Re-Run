const mongoose = require('mongoose')
const { v4: uuidv4 } = require("uuid")

const UserSchema = mongoose.Schema({
	_id:{
		type: String,
		default: uuidv4(),
	},
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

})

 module.exports = mongoose.model('Users', UserSchema)
