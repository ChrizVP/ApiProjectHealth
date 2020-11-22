const Router = require('express');
const router = Router();
const personController = require('../controllers/personController');

const jwtVerify = require('../middlewares/verifyToken');

router.post("/", jwtVerify.verifyToken, personController.createPerson);

router.get('/', jwtVerify.verifyToken, personController.getPerson);

router.get('/:personId', jwtVerify.verifyToken, personController.getPersonById);

router.put('/:personId', jwtVerify.verifyToken, personController.updatePersonById);

router.delete('/:personId', jwtVerify.verifyToken, personController.deletePersonById);

module.exports = router;