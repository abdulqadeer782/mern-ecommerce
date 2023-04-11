import mongoose from "mongoose";

const userModal = new mongoose.Schema({
    name: {
        type: String,
        required,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export default userModal;