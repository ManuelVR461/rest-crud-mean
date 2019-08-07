const express = require('express');
const router = express.Router();

const empleadosCtr = require('../controllers/empleados.controlles');

router.get('/',empleadosCtr.getEmpleados);
router.post('/',empleadosCtr.createEmpleado);
router.get('/:id',empleadosCtr.getEmpleado);
router.put('/:id',empleadosCtr.editEmpleado);
router.delete('/:id',empleadosCtr.deleteEmpleado);

module.exports = router;