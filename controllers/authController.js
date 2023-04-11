const { comparedPassword, hashedPassword } = require("../helpers/authHelper.js");
const User = require('../models/userModel.js')
const JWT = require('jsonwebtoken')

const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        if (!name) return res.send({ message: "Name is required." });
        if (!email) return res.send({ message: "Email is required." });
        if (!password) return res.send({ message: "Password is required." });
        if (!phone) return res.send({ message: "Phone is required." });
        if (!address) return res.send({ message: "Address is required." });
        // res.send({ user: User.find() })
        // check user 
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(200).json({
                success: false,
                message: "User already exist, please login."
            })
        } else {
            // creating new user 
            const hashPass = await hashedPassword(password)
            const user = await new User({
                name,
                email,
                password: hashPass,
                phone,
                address
            }).save();

            res.status(200).json({
                success: true,
                message: "User created successfully.",
                user: user
            })
        }

    } catch (error) {
        res.status(500).json({
            success: true,
            message: error,
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // validation
        if (!email || !password) return res.send({ message: "Invalid email or password." })

        // checking email is exist 
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            res.status(422).json({
                success: false,
                message: "Invalid Email."
            })
        } else {
            // creating new user 
            const hashPass = await comparedPassword(password, existingUser.password)

            if (!hashPass) {
                res.status(422).json({
                    success: false,
                    message: "Invalid Password.",
                })
            } else {
                // creating token
                const token = await JWT.sign({ _id: existingUser._id }, process.env.JWT_KEY, { expiresIn: '1d' });
                res.status(200).json({
                    success: true,
                    message: "Loggedin Successfully.",
                    user: {
                        email: existingUser.email,
                        name: existingUser.name,
                        address: existingUser.address,
                        token: token
                    }
                })
            }
        }

    } catch (error) {
        res.status(500).json({
            success: true,
            status: 500,
            message: error,
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}