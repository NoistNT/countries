import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRIES_BY_NAME,
  CLEAN_DETAIL
} from './actions/types'

const initialState = {
  countries: [],
  countryDetail: {}
}

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload
      }
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        countryDetail: payload
      }
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: payload
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        countryDetail: {}
      }
    default:
      return { ...state }
  }
}
