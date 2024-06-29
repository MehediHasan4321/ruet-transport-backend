const router = require('express').Router()
const busController = require('../api/v1/bus')

router.route('/api/v1/buses')
.get(busController.findAllItems)
.post(busController.create)

router.route('/api/v1/buses/:id')
.get()
.put()
.patch()
.delete()





module.exports = router