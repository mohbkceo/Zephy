const express = require('express')
const router = express.Router()
const {createAccount, ALLusers, deletaccount, Login, BlockOne} = require ("../controller/Users")


router.route('/').post(createAccount).get(ALLusers).delete(deletaccount)
router.route('/login').post(Login)
router.route('/:id').put(BlockOne)

module.exports = router