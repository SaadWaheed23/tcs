const express = require('express');
const router = express.Router();

const { postAssignment } = require('../controllers/assignment');

router.post('/submit', postAssignment);

module.exports = router;
