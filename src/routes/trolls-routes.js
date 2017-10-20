const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/trolls-controllers')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getTroll)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.del)

module.exports = router