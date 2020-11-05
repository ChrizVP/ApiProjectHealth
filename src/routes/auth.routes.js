const Router = require('express');
const router = Router();
const authController = require ('../controllers/authController');

router.post('/signup', authController.signup)
router.post('/signin', authController.signin)
router.get('/gettoken', authController.gettoken)
router.get('/logout', authController.logout)

module.exports = router;