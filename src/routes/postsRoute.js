const router = require('express').Router()
const postController = require('../controllers/postController')



router.get('/posts', postController.getAllPosts)
router.get('/:id', postController.getPost)
router.post('/', postController.addPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)




module.exports = router