const { Activity } = require('../../db')

const getActivities = async () => {
  try {
    const activities = await Activity.findAll({})
    const plainActivities = activities.map((activity) =>
      activity.get({ plain: true })
    )
    return plainActivities
  } catch (error) {
    if (error) throw Error('Failed to fetch activities')
  }
}

module.exports = getActivities
