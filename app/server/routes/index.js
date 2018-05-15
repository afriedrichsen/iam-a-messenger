const express = require('express');
const path = require('path');
// Here are our route files.
const manageRoutes = require('./manage.route');
const messageRoutes = require('./message.route');

const router = express.Router();

/**
 * GET /docs
 */
router.use('/docs', express.static(path.join(__dirname, '../docs')));


/**
 * GET /status
 */
router.get('/status', (req, res) => res.send('OK'));

// We load our routes from each respective file.
router.use('/manage', manageRoutes);
router.use('/message', messageRoutes);

module.exports = router;