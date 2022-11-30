const userServise = require('../servises/userServise')


const getUser = async (req, res)=> {
    try {
        const reqParamsId = req.params.id
        const reqBody = req.body
        const result = await userServise.getUser({reqBody, reqParamsId})
        return res.status(200).json(result)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}


const updateUser = async (req, res)=>{
    try {
        const reqParamsId = req.params.id
        const reqBody = req.body
        const update = await userServise.updateUser({reqParamsId, reqBody}) 
        res.status(200).json(update)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}


const deleteUser = async (req, res) => {
    try {
        const reqBody = req.body.userId
        const reqParamsId = req.params.id
        const result = await userServise.deleteUser({reqParamsId, reqBody})
        res.status(200).json(result)
    } catch (err) {
        // console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
    getUser,
    updateUser,
    deleteUser
}