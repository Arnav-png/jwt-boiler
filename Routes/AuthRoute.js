const express = require('express')
const Auth = require('../Controler/Auth.controller.js')
const router = express.Router()

router.post('/register' , Auth.authController)
router.post('/login' , Auth.login)

module.exports = router