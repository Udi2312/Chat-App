import jwt from "jsonwebtoken";
export const generateToken = (userID, res) =>{
    const token = jwt.sign({id: userID}, process.env.JWT_SECRET, {expiresIn: "7d"});
    res.cookie("jwt", token, {
        httpOnly: true,
        sameSite: "Strict",
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: process.env.NODE_ENV != "development" 
    });
    return token;
}