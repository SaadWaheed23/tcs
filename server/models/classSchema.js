const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
	coursename: {
		type: String,
		max: 40
	},
	courseid: {
		type: Number
	},
	student: {
		type: Number
	},
	assignment: {
		type: Number
	},
	quizzes: {
		type: Number
	}
});

module.exports = mongoose.model('classes', ClassSchema);
