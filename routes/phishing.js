const express = require('express')
const router = express.Router()

const phishCtrl = require('../controllers/phishing')

router.get('/start', phishCtrl.getHome)

router.get('/next', phishCtrl.getPhishing)


module.exports = router;