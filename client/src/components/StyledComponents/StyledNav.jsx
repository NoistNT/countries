import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #22223b;
  font-family: 'Raleway', sans-serif;
  padding: 1.5rem 1rem;

  @media (min-width: 767px) {
    padding: 2rem 0;
  }
`

export const NavBarUl = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  color: #ffffffe0;
  margin: 0;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
  }

  @media (min-width: 1440px) {
    justify-content: space-evenly;
  }
`

export const NavBarLi = styled.li`
  display: flex;
  align-items: center;
`

export const StyledLink = styled(Link)`
  align-items: center;
  color: #ffffffe0;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 0.9rem;

  &:hover,
  &:focus {
    font-weight: 600;
    color: #a200ff;
  }

  &:active {
    color: #4941b3;
  }

  @media (min-width: 1440px) {
    font-size: 1rem;
  }
`

export const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 20px;
  cursor: pointer;

  @media (min-width: 767px) {
    display: none;
  }
`

export const HamburgerLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #ffffffe0;

  &:nth-child(2) {
    margin: 6px 0;
  }
`
