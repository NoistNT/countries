// Controllers
const postActivity = require('../controllers/activity/postActivity')
const getActivities = require('../controllers/activity/getActivities')

const { Router } = require('express')

const router = Router()

// Routes config
router.post('/', async (req, res) => {
  const activity = req.body
  try {
    res.status(200).json(await postActivity(activity))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    res.status(200).json(await getActivities())
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
