const express = require('express');
const router = express.Router();

router.post('/', handle);

module.exports = router;