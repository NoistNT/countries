import React, { useState } from 'react'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
          <StyledLink to={'/countries'}>HOME</StyledLink>
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
