import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesByName } from '../redux/actions/actions'
import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarButton
} from './StyledComponents/StyledSearchBar'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    dispatch(getCountriesByName(query))
    setQuery((e.target.value = ''))
    // navigate('/countries')
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  return (
    <SearchBarContainer>
      <SearchBarInput
        type='text'
        placeholder='Search country'
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <SearchBarButton onClick={handleSearch}>Search</SearchBarButton>
    </SearchBarContainer>
  )
}
