const express = require('express')
const router = express.Router()

const phishCtrl = require('../controllers/phishing')

router.get('/', phishCtrl.mainPage)

router.post('/api/phishing', phishCtrl.getPhishing)


module.exports = router;