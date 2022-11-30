const bcrypt = require('bcrypt')
const User = require('../mongodb/models/User')
const Post = require('../mongodb/models/Post')



const getUser = async ({reqBody, reqParamsId})=> {
    //reqParams equel to :id & reqBody equel to req.body
    if(reqBody.userId === reqParamsId){
        const user = await User.findById(reqParamsId)
        if(!user){
            return {message: 'user not found'}
        }
        return user
    } else {
        return {message:'you can update only your account!'}
    }
}




const updateUser = async ({reqParamsId, reqBody})=> {
    //reqParamsId equel to :id & reqBody equel to req.body
    if(reqBody.userId == reqParamsId) {
        if(reqBody.password) {
            reqBody.password = bcrypt.hashSync(reqBody.password, Number(process.env.SALT_AMOUNT))
        }
            const updatedUser = await User.findByIdAndUpdate(reqParamsId, {
                $set: reqBody
                },  { new:true }
            )
            console.log(updatedUser);
            return updatedUser
    } else {
        return {message:'you can update only your account!'} // res.status(401).json
    }
}




const deleteUser = async ({reqParamsId, reqBody})=> {
    if(reqBody == reqParamsId) {
        const user = await User.findById(reqParamsId)
          await Post.deleteMany({username: user.username})
        if(!user) {
            return {message: 'user not found!'}
        }
        await User.findByIdAndDelete(reqParamsId)
        return {message: 'User successfuly deleted'}
    }
    return {message: 'you can delete only your account!'}
}


module.exports = {
    getUser,
    updateUser,
    deleteUser
}