const express = require('express');
const router = express.Router(); 
const userCtrl = require('../controllers/user');
const control = require('../middleware/control-password');

router.post('/signup', control, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;