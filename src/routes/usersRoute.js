const router = require('express').Router()
const userController = require('../controllers/userController')


// GET USER
router.get('/', userController.getUser)
// UPDATE USER
router.put('/:id', userController.updateUser)
// DELETE USER
router.delete('/:id', userController.deleteUser)




module.exports = router