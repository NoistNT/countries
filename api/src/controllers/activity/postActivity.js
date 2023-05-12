const { Activity, Country } = require('../../db')
const { Op } = require('sequelize')

const createActivity = async ({
  name,
  difficulty,
  duration,
  season,
  country
}) => {
  if (!name || !difficulty || !season || !country) {
    throw Error(
      'Missing data. Please provide a valid name, difficulty, season and country'
    )
  }

  try {
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: {
            [Op.any]: country.map((name) => `%${name}%`)
          }
        }
      }
    })
    if (!countries.length)
      throw Error(`Could not find the country named: ${country}`)

    const newActivity = await Activity.create({
      name,
      difficulty,
      duration: duration || 'Unknown',
      season
    })
    await newActivity.addCountries(countries)

    return 'Activity created successfully'
  } catch (error) {
    console.error(error)
    throw Error('Could not create activity')
  }
}

module.exports = createActivity
