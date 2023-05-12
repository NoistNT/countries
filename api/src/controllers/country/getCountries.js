const { Country } = require('../../db')

const getCountries = async () => {
  try {
    const countries = await Country.findAll({ raw: true })
    return countries
  } catch (error) {
    if (error) throw Error('Failed to fetch countries')
  }
}

module.exports = getCountries
