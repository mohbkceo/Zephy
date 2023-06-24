const express = require('express')
const SciRouter = express.Router()

const {
    CreatePost,
    GetAllPosts,
    GetPost,
    DeletALlPosts,
    DeleteOne,
    UpdateOne,
    GetUserPost
} = require('../controller/Scenario')

SciRouter.route('/').post(CreatePost).get(GetAllPosts).delete(DeletALlPosts)
SciRouter.route('/:id').get(GetPost).delete(DeleteOne).patch(UpdateOne)
SciRouter.route('/user/:id').get(GetUserPost)



module.exports = SciRouter