const categoryServise = require('../servises/categoryServise')

// GET POST
const getCategory = async (req, res) => {
    try {
        const result = await categoryServise.getCategory()
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}



// ADD POST
const addCategory = async (req, res)=> {
    try {
        const reqBody = req.body
        const newCategory = await categoryServise.addCategory(reqBody)
        res.status(200).json(newCategory)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}






module.exports = {
    getCategory,    
    addCategory
}