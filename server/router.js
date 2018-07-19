const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/description/:name')
.get(controller.get)

router.route('/description')
.post(controller.post);

module.exports = router;