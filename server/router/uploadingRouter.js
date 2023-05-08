//创建服务器
const express = require('express')
const router = express.Router()

const handle = require('../router_handler/uploading')

router.post('/uploading', handle.uploading)

module.exports = router