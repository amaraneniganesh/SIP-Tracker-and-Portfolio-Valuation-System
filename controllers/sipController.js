const SIPModel = require('../models/sipModel');

const processSIP = async (req, res) => {
    try {
        const result = await SIPModel.processInstallment(req.params.sipId);
        res.status(201).json({ message: "SIP Installment Processed", data: result });
    } catch (err) {
        res.status(500).json({ error: typeof err === 'string' ? err : err.message });
    }
};


const getTransactions = async (req, res) => {
    try {
        const rows = await SIPModel.getTransactions(req.params.investorId);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { processSIP, getTransactions };