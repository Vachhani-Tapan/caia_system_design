const express = require('express');
const router = express.Router();
const {
    getConcepts,
    getConcept,
    createConcept
} = require('../controllers/conceptController');

// ============================================================
// CONCEPT ROUTES
// ============================================================

// @route   GET /api/v1/concepts
// @desc    Fetch all concepts
router.get('/api/v1/concepts', getConcepts);

// @route   GET /api/v1/concepts/:id
// @desc    Fetch single concept
router.get('/api/v1/concepts/:id', getConcept);

// @route   POST /api/v1/concepts
// @desc    Create new concept
router.post('/api/v1/concepts', createConcept);

module.exports = router;
