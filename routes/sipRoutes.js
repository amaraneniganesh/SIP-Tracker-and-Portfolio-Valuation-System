const express = require('express');
const router = express.Router();
const sipController = require('../controllers/sipController');
const {authMiddleware} = require('../middleware/authMiddleware');

router.post('/:sipId/process', authMiddleware, sipController.processSIP);
router.get('/transactions/:investorId', authMiddleware, sipController.getTransactions);

module.exports = router;