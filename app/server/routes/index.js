const express = require('express');

// Here are our route files.
const manageRoutes = require('./manage.route');
const messageRoutes = require('./message.route.js');

const router = express.Router();

/**
 * GET /status
 */
router.get('/status', (req, res) => res.send('OK'));

// We load our routes from each respective file.
router.use('/manage', manageRoutes);
router.use('/message', messageRoutes);

module.exports = router;