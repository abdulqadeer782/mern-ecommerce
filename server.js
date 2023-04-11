import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'

const app = express();

// dotenv config
dotenv.config();

// db config
connectDB();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// routes 
app.use('/api', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port http://localhost:${port} 🔥`));