import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
dotenv.config();
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
// import { connect } from 'mongoose';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth" , authRoutes)
app.use("/api/message" , messageRoutes)
const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log('Server is running on PORT: '+ PORT);
    connectDB();
});