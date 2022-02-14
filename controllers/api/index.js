const router = require('express').Router();
const userRoutes = require('./userRoutes');
const artRoutes = require('./art-routes').router;
const addToRegistry = require('./postAddToRegistry');
const addRemoveLikes = require('./postAddRemoveLikes');

router.use('/users', userRoutes);
router.use('/', addToRegistry);
router.use('/', addRemoveLikes);
router.use('/art', artRoutes);

module.exports = router;
