const { Activity, Country } = require('../../db')

const getActivities = async () => {
  try {
    const activities = await Activity.findAll({
      include: [
        {
          model: Country,
          attributes: ['id', 'name'],
          through: { attributes: [] }
        }
      ]
    })

    if (!activities.length) throw Error('There are no activities')

    return activities
  } catch (error) {
    if (error) throw Error('Failed to fetch activities')
  }
}

module.exports = getActivities
