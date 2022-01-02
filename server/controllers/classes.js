const Class = require('../models/classSchema');

exports.GetClasses = async (req, res) => {
	let classes = await Class.find({}).exec();
	res.json(classes);
};
