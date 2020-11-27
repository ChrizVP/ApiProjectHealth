const Router = require('express');
const router = Router();
const measurementController = require('../controllers/measurementController');

const jwtVerify = require('../middlewares/verifyToken');

router.post("/weight/", jwtVerify.verifyToken, measurementController.createWeight);

router.get("/weight/", jwtVerify.verifyToken, measurementController.getWeight);

router.post("/water/", jwtVerify.verifyToken, measurementController.createWater);

router.post("/heartRate/", jwtVerify.verifyToken, measurementController.createHeartRate);

router.get("/heartRate/", jwtVerify.verifyToken, measurementController.getHeartRate);

module.exports = router;