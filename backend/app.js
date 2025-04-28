const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const listRoutes = require('./routes/listRoutes');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/lists', listRoutes);

module.exports = app;
