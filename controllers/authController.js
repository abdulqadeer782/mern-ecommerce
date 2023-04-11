import { hashedPassword } from "../helpers/authHelper.js"

export const registerUser = async (req, res) => {
    try {
        hashedPassword('lund').then((rs) => console.log(rs))
        res.send("hashedPassword('password')")
    } catch (error) {

    }
}

