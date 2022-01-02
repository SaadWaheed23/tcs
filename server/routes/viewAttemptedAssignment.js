const express = require('express');
const router = express.Router();

const { viewAssignments, downloads } = require('../controllers/assignment');

router.get('/assignments', viewAssignments);

router.get('/downloads/:id', downloads);

module.exports = router;
