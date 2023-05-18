// Controllers
const getCountries = require('../controllers/country/getCountries')
const getCountryByID = require('../controllers/country/getCountryByID')
const getCountryByName = require('../controllers/country/getCountryByName')

const { Router } = require('express')

const router = Router()

// Routes config
router.get('/', async (req, res) => {
  const { name } = req.query
  try {
    name
      ? res.status(200).json(await getCountryByName(name))
      : res.status(200).json(await getCountries())
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    res.status(200).json(await getCountryByID(id))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
