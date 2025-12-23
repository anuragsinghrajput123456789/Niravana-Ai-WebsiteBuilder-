const express = require('express');
const { generateWebsite } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware'); // Optional: if you want it protected

const router = express.Router();

// You can choose to protect this route or leave it public. 
// Given the user flow, it might be better to be public or protected depending on if token is always present.
// Home.jsx checks for token, but the generation itself... 
// The snippet showed `if (token) fetchHistory()`. 
// It didn't explicitly blocking generation if no token (it just doesn't save history).
// So I'll make it open for now or check if protect is needed.
// Safer to make it public for trial, or just stick to the pattern.
// I'll leave it unprotected for now to ensure it works easily, but usually it should be protected.
// However, looking at Home.jsx, it allows generation even if `token` is null (but history saving is skipped).
// So I will NOT use `protect` middleware for the generation route for now to match frontend behavior.

router.post('/generate', generateWebsite);

module.exports = router;
