const express = require('express');
const router = express.Router();
const { saveEntry, getAllEntries, checkCustomer } = require('../controllers/scratchController');

router.post('/claim', saveEntry);
router.get('/entries', getAllEntries);
router.post('/check', checkCustomer);

module.exports = router;
