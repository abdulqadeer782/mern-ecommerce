const bcrypt = require('bcrypt');

const hashedPassword = async (pass) => {
    try {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(pass, saltRound);
        return hashedPassword
    } catch (error) {
        console.log(error)
    }
}

const comparedPassword = async (pass, hashedPassword) => {
    try {
        return bcrypt.compare(pass, hashedPassword);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    comparedPassword,
    hashedPassword
}