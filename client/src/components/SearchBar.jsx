import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCountries, getCountriesByName } from '../redux/actions/actions'

export default function SearchBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const showAllCountries = () => {
    dispatch(getCountries())
    setQuery('')
    navigate('/countries')
  }

  const handleSearch = () => {
    dispatch(getCountriesByName(query))
  }

  const handleChange = (e) => {
    handleSearch()
    setQuery(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
      setQuery((e.target.value = ''))
    }
  }

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={showAllCountries}>Show all countries</button>
    </div>
  )
}
