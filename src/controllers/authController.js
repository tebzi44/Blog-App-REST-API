const authServise = require('../servises/authServise')

const signUp = async (req, res)=> {
    try{
        const { username, email ,password } = req.body
        const newUser = await authServise.signUp({ username, email ,password })
        res.status(200).json(newUser)
    } catch(err) { 
        console.log(e)
        res.status(500).json(err)
    }
}




const logIn = async (req, res)=>{
    try{
        const { username, password } = req.body
        const user = await authServise.logIn({ username, password })

        res.status(200).json(user)
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
} 



module.exports = {
    signUp,
    logIn
}