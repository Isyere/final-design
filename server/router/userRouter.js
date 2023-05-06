const express = require('express')
const router = express.Router()

const router_handler_user = require('../router_handler/user')

// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
const { reg_login_schema, reg_register_schema } = require('../schema/user')

router.post('/login', expressJoi(reg_login_schema), router_handler_user.login)

router.post('/register', expressJoi(reg_register_schema), router_handler_user.register)

module.exports = router