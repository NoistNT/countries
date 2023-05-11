const { Country } = require('../../db')

const getCountries = async () => {
  try {
    const countries = await Country.findAll({})
    const plainCountries = countries.map((country) =>
      country.get({ plain: true })
    )
    return plainCountries
  } catch (error) {
    if (error) throw Error('Failed to fetch countries')
  }
}

module.exports = getCountries
