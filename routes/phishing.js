const express = require('express')
const router = express.Router()

const phishCtrl = require('../controllers/phishing')

router.get('/start', phishCtrl.mainPage)

router.get('/api', phishCtrl.getPhishing)


module.exports = router;