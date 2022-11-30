const Category = require('../mongodb/models/Category')





const getCategory = async ()=> {
    const categories = await Category.find()
    return categories
}





const addCategory = async (reqBody)=> {
    const newCategory = new Category(reqBody)
    const saveCagegory = await newCategory.save()
    return saveCagegory
}

module.exports = {
    getCategory,
    addCategory
}