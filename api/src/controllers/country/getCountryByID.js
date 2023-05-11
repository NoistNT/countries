const { Country } = require('../../db')

const getCountryByID = async (id) => {
  try {
    const country = await Country.findByPk(id.toUpperCase())
    if (!country) throw Error()
    return country
  } catch (error) {
    if (error) throw Error(`Failed to get country with ID: ${id}`)
  }
}

module.exports = getCountryByID
