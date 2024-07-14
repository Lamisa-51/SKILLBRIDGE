import jwt from 'jsonwebtoken';

const generateAccessToken = (user) => {
    return jwt.sign(
        { _id: user._id, fullname: user.fullname, email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        { _id: user._id, fullname: user.fullname, email: user.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '7d' }
    );
};

export { generateAccessToken, generateRefreshToken };
