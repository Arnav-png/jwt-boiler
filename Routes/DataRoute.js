const express = require('express')
const router = express.Router()
const verify = require('../Middleware/jwt.js')
const data = require('../Controler/Data.controller.js')

router.get("/user" ,verify, data.UserData);

module.exports = router