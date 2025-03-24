import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
dotenv.config();
import authRoutes from './routes/auth.route.js';
import { connect } from 'mongoose';
const app = express();

app.use(express.json());

app.use("/api/auth" , authRoutes)
const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log('Server is running on PORT: '+ PORT);
    connectDB();
});