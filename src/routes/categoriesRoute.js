const router = require('express').Router()
const categoryController= require('../controllers/categoryController')


router.post('/', categoryController.addCategory)
router.get('/', categoryController.getCategory)

module.exports = router