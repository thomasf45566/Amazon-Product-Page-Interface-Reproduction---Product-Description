const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/description')
.get(controller.get)
.post(controller.post);

module.exports = router;