const Router = require('express');
const router = Router();
const authController = require ('../controllers/authController');
const jwtVerify = require('../middlewares/verifyToken');

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/getUser', jwtVerify.verifyToken, authController.getUser);
router.get('/verifySession', jwtVerify.verifyToken, authController.verifySession);
router.get('/logout', authController.logout);

module.exports = router;