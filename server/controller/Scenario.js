const Post = require('../models/Scinarios')
const {StatusCodes} = require('http-status-codes')
const {NotFoundERR, UNAuthorizideERR} = require('../error')

const CreatePost = async (req, res) => {
    req.body.createdBy = req.user.userId
    const post = await Post.create({...req.body})
    res.status(StatusCodes.CREATED).json({ post })
}
const GetAllPosts = async (req, res) => {
    const post = await Post.find({})
    res.status(StatusCodes.CREATED).json({ post, count:post.length })
}
const GetUserPost = async (req, res) => {
    const {id:userId} = req.params
    const post = await Post.find({createdBy:userId})
    res.status(StatusCodes.CREATED).json({ post, count:post.length })
}
const GetPost = async (req, res) => {
    const {id:userId} = req.params
    const post = await Post.findOne({_id:userId})
    res.status(StatusCodes.CREATED).json({ post })
}
const DeleteOne = async (req, res) => {
    const {id:postId} = req.params
    const {userId} = req.user
    const post = await Post.findOneAndDelete({_id:postId})
    if(!post){
        throw new NotFoundERR('No Posts to delet! ')
    }
    const isMatch = post.createdBy == userId
    if(!isMatch){
        throw new UNAuthorizideERR('Somthing happend! err')
    }
    res.status(StatusCodes.CREATED).json({ post })
}
const UpdateOne = async (req, res) => {
    const {id:postId} = req.params
    const {userId} = req.user
    const post = await Post.findOneAndUpdate({_id:postId}, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
    if(!post){
        throw new NotFoundERR('No Posts to Update! ')
    }
    const isMatch = userId == post.createdBy
    if(!isMatch){
        throw new UNAuthorizideERR('Somthing happend! err')
    }
    res.status(StatusCodes.OK).json({ post })
}
const DeletALlPosts = async (req, res) => {
    const post = await Post.deleteMany({})
    res.status(StatusCodes.OK).json({ post })
}
module.exports = {
    CreatePost,
    GetAllPosts,
    GetPost,
    DeletALlPosts,
    DeleteOne,
    UpdateOne,
    GetUserPost
}