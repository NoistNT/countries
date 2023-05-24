import React from 'react'
import { useDispatch } from 'react-redux'
import { filterByContinent, getSorted } from '../redux/actions/actions'
import {
  MenuContainer,
  SelectLabel,
  SelectBox
} from './StyledComponents/StyledMenu'

export default function Menu() {
  const dispatch = useDispatch()

  const handleFilterByContinent = (e) => {
    const selectedFilter = e.target.value
    dispatch(filterByContinent(selectedFilter))
  }

  const handleSort = (e) => {
    const selectedSort = e.target.value
    dispatch(getSorted(selectedSort))
  }

  return (
    <MenuContainer>
      <div>
        <SelectLabel>Filter by continent</SelectLabel>
        <SelectBox
          id='filterByContinent'
          name='filterByContinent'
          onChange={handleFilterByContinent}
        >
          <option value='all'>--Select a continent--</option>
          <option value='all'>All continents</option>
          <option value='North America'>North America</option>
          <option value='South America'>South America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
          <option value='Africa'>Africa</option>
          <option value='Antarctica'>Antarctica</option>
        </SelectBox>
      </div>
      <div>
        <SelectLabel>Sort</SelectLabel>
        <SelectBox id='sort' name='sort' onChange={handleSort}>
          <option value=''>--Select sorting--</option>
          <option value='az'>A to Z</option>
          <option value='za'>Z to A</option>
          <option value='higher'>Higher population</option>
          <option value='lower'>Lower population</option>
        </SelectBox>
      </div>
      {/* <div>
        <SelectLabel>Activities around the world</SelectLabel>
        <SelectBox
          id='getActivities'
          name='getActivities'
          onChange={handleSort}
        >
          <option value=''>--Activities--</option>
          <option value='az'>A to Z</option>
        </SelectBox>
      </div> */}
    </MenuContainer>
  )
}
