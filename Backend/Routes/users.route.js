const router = require('express').Router();
const helper = require('../Helpers/helper');

const user_controller = require('../Controllers/user.controller');

router.post('/api/auth/sign-up', user_controller.user_register);
router.post('/api/auth/sign-in', user_controller.sign_in);
router.get('/api/auth/me', helper.logged_in, user_controller.get_user);
router.put('/api/users/:userId', helper.logged_in, user_controller.update_user);

module.exports = router;
