const Router = require('express');
const router = Router();

const personController = require('../controllers/personController');

router.post('/', personController.createPerson)

router.get('/', personController.getPersons)

router.get('/:personId', personController.getPersonById)

router.put('/:personId', personController.updatePersonById)

router.delete('/:personId', personController.deletePersonById)

module.exports = router;