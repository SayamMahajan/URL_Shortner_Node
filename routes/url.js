const express = require('express');
const router = express.Router();
const { handleGenerateNewURL, handleGetAnalytics, handleGetUrl } = require('../controllers/url')

router.post('/', handleGenerateNewURL);

router.get('/url/:shortid', handleGetUrl);

router.get('/analytics/:shortid', handleGetAnalytics);

module.exports = router;