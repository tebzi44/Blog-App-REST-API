const Post = require('../mongodb/models/Post')

// GET ALL POSTS
const getAllPost = async ({username, catName})=> {
    let posts;
    if(username){
        posts = await Post.find({username}) 
    } else if (catName) {
        posts = await Post.find({categories: {$in:[catName] }})
    } else {
        posts = await Post.find()
    }
    return posts
}


// GET POST
const getPost = async (reqParamsId)=> {
    const post = await Post.findById(reqParamsId)
    return (post.length ? post : 'Empty') 
}


// ADD USER
const addPost = async (reqBody)=> {
    const newPost = new Post(reqBody)
    const savePost = await newPost.save()
    return savePost
}

// UPDATE USER
const updatePost = async ({reqBody, reqParamsId})=> {
    // console.log({reqBody, reqParamsId});
    const post = await Post.findById(reqParamsId)
    if(post.username === reqBody.username){
        const updatedPost = await Post.findByIdAndUpdate(reqParamsId, {
            $set: reqBody 
        }, { new: true }
        )
    return updatedPost
    } else {
        return {message: 'You can update only your post!'}
    }

}

// DELETE POST
const deletePost = async ({reqBody, reqParamsId})=> {
    const post = await Post.findById(reqParamsId)
    if(reqBody.username === post.username){
        await post.delete()
        return {message: 'Post has been deleted'}
    }
    return {message: 'You can delete only your post!'}
}

module.exports = {
    getPost,
    getAllPost,
    addPost,
    updatePost,
    deletePost
}