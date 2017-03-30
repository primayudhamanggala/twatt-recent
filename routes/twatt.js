const express = require('express');
const router = express.Router()
const twattController = require('../controllers/twatt-controller');


router.get('/search', twattController.twitterSearch)

router.get('/timeline', twattController.twitterTimeline)

module.exports = router;
