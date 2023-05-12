const { Country, Activity } = require('../../db')
const { Op } = require('sequelize')

const getCountryByName = async (name) => {
  try {
    if (!name) throw Error('Country name is missing')
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },
      include: [
        {
          model: Activity,
          attributes: ['name', 'difficulty', 'duration', 'season'],
          through: { attributes: [] }
        }
      ]
    })
    if (!countries.length)
      throw Error(`Couldn't find countries including ${name}`)
    return countries
  } catch (error) {
    if (error) throw Error(`Failed to get country with name: ${name}`)
  }
}

module.exports = getCountryByName
