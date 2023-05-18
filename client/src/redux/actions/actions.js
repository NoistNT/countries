import axios from 'axios'
import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRIES_BY_NAME,
  CLEAN_DETAIL
} from './types'

const URL = 'http://localhost:3001/countries'

export const getCountries = () => {
  return async (dispatch) => {
    const { data } = await axios.get(URL)
    dispatch({ type: GET_COUNTRIES, payload: data })
  }
}

export const getCountryById = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}/${id}`)
    dispatch({ type: GET_COUNTRY_BY_ID, payload: data })
  }
}

export const getCountriesByName = (name) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}?name=${name}`)
    dispatch({ type: GET_COUNTRIES_BY_NAME, payload: data })
  }
}

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL }
}
