const Task = require('../models/taskModel');

exports.getAllTask = async function (req, res) {
	try {
		const tasks = await Task.find({ completed: false });
		console.log(tasks);
		res.json(tasks);
	} catch (error) {
		res.status(404).send(error);
	}
};

exports.addTask = async function (req, res) {
	try {
		console.log(req.body);
		await Task.create(req.body);
		res.status(200).json({
			status: 'success',
			data: {
				task: req.body,
			},
		});
	} catch (error) {
		res.status(404).send(error);
	}
};

exports.updateTask = async function (req, res) {
	try {
		const id = req.params.id;
		await Task.findByIdAndUpdate(id, req.body);
		res.status(200).json({
			status: 'success',
			data: {
				task: req.body,
			},
		});
	} catch (error) {
		res.status(404).send(error);
	}
};

exports.deleteTask = async function (req, res) {
	try {
		const id = req.params.id;
		console.log(id);
		await Task.findByIdAndDelete(id);
		res.status(202).json({});
	} catch (error) {
		res.status(504).send(error);
	}
};
