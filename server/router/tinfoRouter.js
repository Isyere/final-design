const express = require('express')
const router = express.Router()

const router_handler_tinfo = require('../router_handler/tinfo')

router.post('/newTAccount', router_handler_tinfo.newTAccount)

router.post('/editTAccount', router_handler_tinfo.editTAccount)

router.post('/deleteTAccount', router_handler_tinfo.deleteTAccount)

router.get('/getAccountData', router_handler_tinfo.getAccountData)

router.get('/getTInfoData', router_handler_tinfo.getTInfoData)

router.post('/imageStorage', router_handler_tinfo.imageStorage)

router.post('/infoChange', router_handler_tinfo.infoChange)

module.exports = router