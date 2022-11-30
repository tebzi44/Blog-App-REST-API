const router = require('express').Router()
const authRoute = require('./authRoute')
const usersRoute = require('./usersRoute')
const postsRoute = require('./postsRoute')
const categoriesRoute = require('./categoriesRoute')
const multer = require('multer')


const storage  = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../images')
    },
    filename: (req, file, cb)=> {
        cb(null, req.body.name )
    }
})
const upload = multer({storage: storage})

router.post('/upload', upload.single('file'), (req, res)=> {
    res.status(200).json('file has been uploaded')
})


router.use('/auth', authRoute)
router.use('/user', usersRoute)
router.use('/post', postsRoute)
router.use('/categories', categoriesRoute)



module.exports = router;