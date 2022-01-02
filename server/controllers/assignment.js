const Assignments = require('../models/assignmentSchema');

exports.postAssignment = async (req, res) => {
	const file = req.files.file;
	const name = req.body.name;
	const filename = req.files.file.name;

	var nameArray = filename.split('.');

	const fileType = nameArray[nameArray.length - 1];

	const nameExist = await Assignments.findOne({ name }).exec();

	if (nameExist) {
		try {
			Assignments.findOneAndUpdate(
				{
					name: name
				},
				{
					$addToSet: {
						assignments: {
							filename: filename,
							filetype: fileType
						}
					}
				},
				function(err) {
					if (err) {
						console.log(err);
					}
				}
			);

			console.log('assignment added to array');
		} catch (error) {
			console.log(error);
		}
	} else {
		const student = new Assignments(req.body);

		try {
			await student.save();
			Assignments.findOneAndUpdate(
				{
					name: name
				},
				{
					$push: {
						assignments: {
							filename: filename,
							filetype: fileType
						}
					}
				},
				function(err) {
					if (err) {
						console.log(err);
					}
				}
			);
			console.log('Assignment added');
		} catch (error) {
			console.log(error);
		}
	}

	file.mv(`./uploads/${file.name}`, (err) => {
		if (err) {
			return res.send('error uploading file');
		}
	});

	res.send('file uploaded');
};

exports.viewAssignments = async (req, res) => {
	let assignments = await Assignments.find({}).exec();
	res.json(assignments);
};

exports.downloads = async (req, res) => {
	const id = req.params.id;
	let assignment = await Assignments.findOne({ 'assignments._id': id }).exec();
	// const file = assignments;
	var aArr = assignment.assignments;

	aArr.map((a, i) => {
		if (a._id == id) {
			var file = `./uploads/${a.filename}`;
			res.download(file, a.filename);
		} else {
			return;
		}
	});
};
