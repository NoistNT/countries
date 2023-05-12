const { Country, Activity } = require('../../db')

const getCountryByID = async (id) => {
  try {
    const country = await Country.findByPk(id.toUpperCase(), {
      include: [
        {
          model: Activity,
          attributes: ['name', 'difficulty', 'duration', 'season'],
          through: { attributes: [] }
        }
      ]
    })
    if (!country) throw Error('Country not found')
    return country
  } catch (error) {
    if (error) throw Error(`Failed to get country with ID: ${id}`)
  }
}

module.exports = getCountryByID
