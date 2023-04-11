const JWT = require("jsonwebtoken")

// auth middle for login check
const requireAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        console.log(token)
        // const decode = JWT.verify(req.headers.authorization, process.env.JWT_KEY);
        // next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Please login first."
        })
    }
}

module.exports = requireAuth;