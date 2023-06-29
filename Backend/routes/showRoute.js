const express = require('express')
const ShowController = require('../controllers/ShowController')
const router = express.Router()

router.get('/',ShowController.getAllShows)
router.post('/', ShowController.createShow)
router.get('/:id',ShowController.getShowById)
router.put('/:id', ShowController.updateShow)
router.delete('/:id', ShowController.deleteShow)


module.exports = router
