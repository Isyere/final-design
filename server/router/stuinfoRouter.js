const express = require('express')
const router = express.Router()

const router_handler_stuinfo = require('../router_handler/stuinfo')

router.get('/stuInfo', router_handler_stuinfo.stuInfo)

router.get('/stuEcharts', router_handler_stuinfo.stuEcharts)

router.get('/examineCheck', router_handler_stuinfo.examineCheck)

router.get('/getExamine', router_handler_stuinfo.getExamine)

router.post('/infoChange', router_handler_stuinfo.infoChange)

router.post('/imageStorage', router_handler_stuinfo.imageStorage)

router.post('/examineRefuse', router_handler_stuinfo.examineRefuse)

router.post('/examineAgree', router_handler_stuinfo.examineAgree)

router.get('/getInfoData', router_handler_stuinfo.getInfoData)

router.post('/editInfoData', router_handler_stuinfo.editInfoData)

module.exports = router