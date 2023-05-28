import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
const env = dotenv.config();
export const generateToken = (res, userId) => {
    console.log(env)
    const token = jwt.sign(
        {
            _id: userId,
            name: res.name,
            email: res.email,
        },
        env.parsed.JWT_SECRET,
        {
            expiresIn: '30d',
        }
    );

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    });
}

export default generateToken;
