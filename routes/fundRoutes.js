const express = require('express');
const router = express.Router();
const fundController = require('../controllers/fundController');
const {authMiddleware} = require('../middleware/authMiddleware');

router.get('/', authMiddleware, fundController.getFunds);
router.post('/', authMiddleware, fundController.addFund);
router.put('/:fundId/nav', authMiddleware, fundController.updateNav);

module.exports = router;