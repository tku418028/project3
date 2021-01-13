var express = require('express');
var router = express.Router();

const projectController = require('../controllers/projectController');

router.get('/', projectController.getAnime);

module.exports = router;