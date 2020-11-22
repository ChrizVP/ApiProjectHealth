const Router = require('express');
const router = Router();
const measurementController = require('../controllers/measurementController');

const jwtVerify = require('../middlewares/verifyToken');

router.post("/weight/", jwtVerify.verifyToken, measurementController.createWeight);

router.post("/water/", jwtVerify.verifyToken, measurementController.createWater);

router.post("/heartRate/", jwtVerify.verifyToken, measurementController.createHeartRate);

module.exports = router;