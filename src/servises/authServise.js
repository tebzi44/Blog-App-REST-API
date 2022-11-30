const User = require('../mongodb/models/User')
const bcrypt = require('bcrypt')


const signUp = async ({ username, email ,password })=> {

    const hash = bcrypt.hashSync(password, Number(process.env.SALT_AMOUNT))
    
    const newUser = new User({
                        username,
                        email,
                        password: hash
                    })
    const user = await newUser.save()
    return user
}


const logIn = async ({ username, password })=> {
    const user = await User.findOne({
        username
    })

    if(!user) {
        return ('wrong username!')
    }

    const isPasswordTrue = bcrypt.compareSync(password, user.password, Number(process.env.SALT_AMOUNT));

    if(!isPasswordTrue) {
        return ('wrong password!')
    }
    // console.log(user);
    return user
}

module.exports = {
    signUp,
    logIn
}