import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: fit-content;
  margin: 1rem auto;
  border-radius: 0.4rem;
  background-color: #3c3649ed;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-family: 'Raleway', sans-serif;
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: #3c3649;
  }
`
export const Image = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  height: 213px;
  width: 320px;
`
export const Name = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  color: #e2e2e2;
  border-bottom: solid gray;
  height: 4rem;

  &:hover {
    text-shadow: 1px 0px 8px #727272;
  }

  a {
    color: #e2e2e2;
    text-decoration: none;
  }
`
export const Continent = styled.h3`
  color: #e2e2e2;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
