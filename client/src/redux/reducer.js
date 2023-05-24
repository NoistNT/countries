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
  activities: []
}

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        countries: payload
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
    case SORT_COUNTRIES:
      const { allCountries } = state

      if (payload === 'az') {
        allCountries.sort((a, b) => a.name.localeCompare(b.name))
      } else if (payload === 'za') {
        allCountries.sort((a, b) => b.name.localeCompare(a.name))
      } else if (payload === 'higher') {
        allCountries.sort((a, b) => b.population - a.population)
      } else if (payload === 'lower') {
        allCountries.sort((a, b) => a.population - b.population)
      }
      return {
        ...state,
        countries: allCountries
      }
    case FILTER_BY_CONTINENT:
      const countriesToFilter = state.allCountries
      const filtered =
        payload === 'all'
          ? countriesToFilter
          : countriesToFilter.filter((e) => e.continent === payload)
      return {
        ...state,
        countries: filtered
      }

    default:
      return state
  }
}
