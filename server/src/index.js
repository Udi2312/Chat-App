import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './lib/db.js';
dotenv.config();
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import path from 'path';
import cookieParser from 'cookie-parser';
import { server , app } from './lib/socket.js';

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
}));

const __dirname = path.resolve();
app.use("/api/auth" , authRoutes)
app.use("/api/messages" , messageRoutes)
const PORT = process.env.PORT ;

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client","dist", "index.html"));
    });
}

server.listen(PORT, () => {
    console.log('Server is running on PORT: '+ PORT);
    connectDB();
});