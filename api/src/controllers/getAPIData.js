require('dotenv').config()
const { Country } = require('../db.js')
const { URL } = process.env
const axios = require('axios')

// Get data from external API
const getAPIData = async () => {
  try {
    const { data } = await axios.get(`${URL}/all`)

    const countries = data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : 'No data',
        subregion: country.subregion || 'No data',
        area: country.area,
        population: country.population
      }
    })

    return countries
  } catch (error) {
    console.error(error)
    return error
  }
}

// Load the retrieved data into the Country table
const loadCountries = async () => {
  try {
    const countries = await Country.findAll()
    if (!countries.length) {
      const countriesLoaded = await getAPIData()
      await Country.bulkCreate(countriesLoaded)
      console.log('Database loaded successfully!')
    }
  } catch (error) {
    console.error(`Error loading countries into Database: ${error}`)
    return error
  }
}

// Synchronize countries to database
const syncCountriesToDB = async () => await loadCountries()

syncCountriesToDB()

module.exports = getAPIData
