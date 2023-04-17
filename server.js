const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes.js');

const app = express();

// dotenv config
dotenv.config();

// db config
connectDB();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes 
app.use('/api', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port http://localhost:${port} 🔥`));