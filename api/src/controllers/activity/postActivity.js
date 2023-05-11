const { Activity } = require('../../db')

const createActivity = async (activity) => {
  const { name, difficulty, duration, season } = activity
  if (!name || !difficulty || !season)
    throw Error('Missing data. Please provide name, difficulty, and season')

  try {
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration: duration || null,
      season
    })
    return newActivity
  } catch (error) {
    throw Error('Could not create activity')
  }
}

module.exports = createActivity
