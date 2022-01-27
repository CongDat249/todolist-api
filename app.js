const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
dotenv.config();

// Connect db
async function connectDB() {
	const db = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
	await mongoose.connect(db);
	return 'Success';
}

connectDB()
	.then(console.log)
	.catch(err => console.log(err));

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routes
app.use('/tasks', taskRoutes);

module.exports = app;
