const express = require('express')
const router = express.Router()

const router_handler_stuinfo = require('../router_handler/stuinfo')

router.get('/stuInfo', router_handler_stuinfo.stuInfo)

router.get('/stuEcharts', router_handler_stuinfo.stuEcharts)

router.post('/infoChange', router_handler_stuinfo.infoChange)

router.post('/imageStorage', router_handler_stuinfo.imageStorage)

router.get('/getInfoData', router_handler_stuinfo.getInfoData)

router.post('/editInfoData', router_handler_stuinfo.editInfoData)

module.exports = router