import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import lessonRoutes from './routes/lessonRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());          // Allows your frontend to communicate with your backend securely
app.use(express.json());  // Allows your backend to read JSON data sent in request bodies

// API Routes
app.use('/api/lessons', lessonRoutes);

// Simple health check route to verify the server works
app.get('/', (req, res) => {
  res.send('🚀 Free Code Academy API is running smoothly...');
});

// Start listening for traffic
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server is burning hot on port ${PORT}`);
});