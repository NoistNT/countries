import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCountries } from '../redux/actions/actions'
import SearchBar from './SearchBar'
import {
  NavContainer,
  NavBarUl,
  NavBarLi,
  StyledLink,
  HamburgerIcon,
  HamburgerLine
} from './StyledComponents/StyledNav'

export default function Nav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const showAllCountries = () => {
    dispatch(getCountries())
    navigate('/countries')
  }

  return (
    <NavContainer>
      <HamburgerIcon onClick={toggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerIcon>
      <NavBarUl>
        <NavBarLi>
          <StyledLink to={'/countries'} onClick={showAllCountries}>
            HOME
          </StyledLink>
        </NavBarLi>
        <NavBarLi>
          <StyledLink to={'/about'}>ABOUT</StyledLink>
        </NavBarLi>
        <NavBarLi>
          <StyledLink to={'/activities'}>CREATE ACTIVITY</StyledLink>
        </NavBarLi>
      </NavBarUl>
      <SearchBar />
    </NavContainer>
  )
}
