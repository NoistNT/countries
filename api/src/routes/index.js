const { Router } = require('express')

// Importing Routers
const getAPIData = require('../controllers/getAPIData')
const countriesRoutes = require('./countriesRoutes')
const activitiesRoutes = require('./activitiesRoutes')

// Loading database with countries data
const loadDb = async () => await getAPIData()
loadDb()

const router = Router()

// Setting Routers
router.use('/countries', countriesRoutes)
router.use('/activities', activitiesRoutes)

module.exports = router
