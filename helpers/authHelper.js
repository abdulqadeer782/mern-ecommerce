import bycrypt from 'bcrypt';

export const hashedPassword = async (pass) => {
    try {
        const saltRound = 10;
        const hashedPassword = await bycrypt.hash(pass, saltRound);
        return hashedPassword
    } catch (error) {
        console.log(error)
    }
}


export const comparedPassword = async (pass, hashedPassword) => {
    try {
        return bycrypt.compare(pass, hashedPassword);
    } catch (error) {
        console.log(error)
    }
}   