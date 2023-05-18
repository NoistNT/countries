import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cleanDetail, getCountryById } from '../../redux/actions/actions'
import { useSelector } from 'react-redux'

export default function Detail() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const country = useSelector((state) => state.countryDetail)

  // Mount component
  useEffect(() => {
    dispatch(getCountryById(id))
    return () => dispatch(cleanDetail())
  }, [dispatch, id])

  return (
    <div>
      {country ? (
        <div>
          <h1>{country.name}</h1>
          <img src={country.flag} alt={country.name} />
          <h3>ID: {country.id}</h3>
          <h3>Continent: {country.continent}</h3>
          <h3>Capital: {country.capital}</h3>
          <h3>Subregion: {country.subregion}</h3>
          <h3>Area: {country.area}</h3>
          <h3>Population: {country.population}</h3>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}
