const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema(
	{
		name: {
			type: String
		},
		assignments: [
			{
				filename: String,
				filetype: String
			}
		]
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Assignments', AssignmentSchema);
