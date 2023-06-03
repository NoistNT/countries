import React from 'react'
import {
  CardContainer,
  Image,
  Name,
  Continent,
  StyledLink
} from './StyledComponents/StyledCard'

export default function Card({ country }) {
  const { id, name, flag, continent } = country
  return (
    <CardContainer key={id}>
      <StyledLink to={`/countries/${id}`}>
        <Image src={flag} alt={name} />
        <Name>{name}</Name>
        <Continent>{continent}</Continent>
      </StyledLink>
    </CardContainer>
  )
}
