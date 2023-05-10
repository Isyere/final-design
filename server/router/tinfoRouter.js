const express = require('express')
const router = express.Router()

const router_handler_tinfo = require('../router_handler/tinfo')

router.post('/newTAccount', router_handler_tinfo.newTAccount)

router.post('/editTAccount', router_handler_tinfo.editTAccount)

router.post('/deleteTAccount', router_handler_tinfo.deleteTAccount)

router.get('/getAccountData', router_handler_tinfo.getAccountData)

module.exports = router