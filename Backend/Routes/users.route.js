const router = require('express').Router();

const user_controller = require('../Controllers/user.controller');

router.post('/api/auth/sign-up', user_controller.user_register);
router.post('/api/auth/sign-in', user_controller.sign_in);
router.get('/api/auth/me', user_controller.get_user);

module.exports = router;
