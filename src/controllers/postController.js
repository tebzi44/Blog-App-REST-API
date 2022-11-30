const Post = require('../mongodb/models/Post')
const postServise = require('../servises/postServise')


//GET ALL POSTS
const getAllPosts = async (req, res)=> {
    try {
        const username = req.query.user
        const catName = req.query.cat
        const Posts = await postServise.getAllPost({username, catName})
        res.status(200).json(Posts)
    } catch (err) {
        
    }
}


// GET POST
const getPost = async (req, res)=> {
    try {
        const reqParamsId = req.params.id
        const post = await postServise.getPost(reqParamsId)
        res.status(200).json(post)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}


// ADD POST
const addPost = async (req, res)=> {
    try {
        const reqBody = req.body
        const addedPost = await postServise.addPost(reqBody)

        res.status(200).json(addedPost)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}


// UPDATE POST
const updatePost = async (req, res) => {
    try {
        const reqBody = req.body
        const reqParamsId = req.params.id
        const result = await postServise.updatePost({reqBody, reqParamsId})

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}


// DELETE POST
const deletePost = async (req, res)=> {
    try {
        const reqBody = req.body
        const reqParamsId = req.params.id
        const result = await postServise.deletePost({reqBody, reqParamsId})
        res.status(200).json(result)       
    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports = {
    getAllPosts,
    getPost,
    addPost,
    updatePost,
    deletePost
}