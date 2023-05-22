import axios from 'axios'
import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_COUNTRIES_BY_NAME,
  CREATE_ACTIVITY,
  CLEAN_DETAIL,
  FILTER_BY_CONTINENT,
  SORT_COUNTRIES
} from './types'

const URL = 'http://localhost:3001'

export const getCountries = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}/countries`)
    dispatch({ type: GET_COUNTRIES, payload: data })
  }
}

export const getCountryById = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}/countries/${id}`)
    dispatch({ type: GET_COUNTRY_BY_ID, payload: data })
  }
}

export const getCountriesByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/countries?name=${name}`)
      dispatch({ type: GET_COUNTRIES_BY_NAME, payload: data })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

export const createActivity = (activity) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL}/activities`, activity)
      dispatch({ type: CREATE_ACTIVITY, payload: data })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL }
}

export const filterByContinent = (continent) => {
  return { type: FILTER_BY_CONTINENT, payload: continent }
}

export const getSorted = (data) => {
  return { type: SORT_COUNTRIES, payload: data }
}
