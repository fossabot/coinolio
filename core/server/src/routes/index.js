const express = require('express');
const router = new express.Router();

const usersRoutes = require('./users.route');
const authRoutes = require('./auth.route');
const snapshotsRoutes = require('./snapshots.route');
const exchangesRoutes = require('./exchanges.route');
const tradesRoutes = require('./trades.route');

router.get('/', (req, res) => {
  res.status(200).send('Welcome to Coinolio API!');
});

// mount user routes at /users
router.use('/users', usersRoutes);

// mount user routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /snapshots
router.use('/snapshots', snapshotsRoutes);

// mount user routes at /exchanges
router.use('/exchanges', exchangesRoutes);

// mount user routes at /trades
router.use('/trades', tradesRoutes);

module.exports = router;
