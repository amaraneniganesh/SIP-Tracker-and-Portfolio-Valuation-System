const express = require('express');
const router = express.Router();
const investorController = require('../controllers/investorController');
const {authMiddleware} = require('../middleware/authMiddleware');

router.post('/register', investorController.register);
router.post('/login', investorController.login);
router.get('/:investorId/networth', authMiddleware, investorController.getNetWorth);
router.get('/:investorId', authMiddleware, investorController.getInvestorById);
router.get('/:investorId/holdings', authMiddleware, investorController.getInvestorHoldings);
router.post('/logout', authMiddleware, investorController.logout);

module.exports = router;