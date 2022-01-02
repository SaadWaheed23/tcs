const express = require('express');

const { GetClasses } = require('../controllers/classes');

const router = express.Router();

router.get('/classes', GetClasses);

module.exports = router;
