import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRIES_BY_NAME,
  CREATE_ACTIVITY,
  CLEAN_DETAIL,
  FILTER_BY_CONTINENT,
  SORT_COUNTRIES
} from './actions/types'

const initialState = {
  allCountries: [],
  countries: [],
  country: {},
  activities: [],
  isSorted: false,
  filter: 'all',
  sort: ''
}

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        countries: payload,
        isSorted: false
      }
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        country: payload
      }
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: payload
      }
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: payload
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        country: {}
      }
    case FILTER_BY_CONTINENT:
      const { allCountries, sort } = state
      const filtered =
        payload === 'all'
          ? allCountries
          : allCountries.filter((country) => country.continent === payload)

      let sorted = filtered
      if (sort === 'az')
        sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
      if (sort === 'za')
        sorted = [...filtered].sort((a, b) => b.name.localeCompare(a.name))
      if (sort === 'higher')
        sorted = [...filtered].sort((a, b) => b.population - a.population)
      if (sort === 'lower')
        sorted = [...filtered].sort((a, b) => a.population - b.population)

      return {
        ...state,
        countries: sorted,
        filter: payload,
        isSorted: true
      }

    case SORT_COUNTRIES:
      const { countries, filter } = state
      let sortedCountries
      if (payload === 'az') {
        sortedCountries = [...countries].sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      } else if (payload === 'za') {
        sortedCountries = [...countries].sort((a, b) =>
          b.name.localeCompare(a.name)
        )
      } else if (payload === 'higher') {
        sortedCountries = [...countries].sort(
          (a, b) => b.population - a.population
        )
      } else if (payload === 'lower') {
        sortedCountries = [...countries].sort(
          (a, b) => a.population - b.population
        )
      } else {
        sortedCountries = countries
      }

      const filteredCountries =
        filter === 'all'
          ? sortedCountries
          : sortedCountries.filter((country) => country.continent === filter)

      return {
        ...state,
        countries: filteredCountries,
        sort: payload,
        isSorted: true
      }
    default:
      return { ...state }
  }
}
