import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const Signup = async (req, res) => {
    const {fullName, email, password} = req.body;
    try{
        if(password.length < 6) {
            return res.status(400).json({message: "Password must be at least 6 characters long"});
        }

        const user = await User.findOne({email})

        if (user) return res.status(400).json({message: "User already exists"});
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        });
        if(newUser){
            generateToken(newUser._id, res);
            await newUser.save();
            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            });
            
        }
        else{
            return res.status(400).json({message: "Invalid User Data"});
        }
    }
    catch(error) {
        console.log("Error is signup controller:", error.message);
        
    }
}
export const Login = (req, res) => {
    res.send("Login route");
}
export const Logout = (req, res) => {
    res.send("Logout route");
}