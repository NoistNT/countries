import React from 'react'
import Card from './Card'
import { CardsContainer } from './StyledComponents/StyledCards'

export default function Cards({ countries }) {
  return (
    <CardsContainer>
      {countries.length &&
        countries.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            flag={country.flag}
            continent={country.continent}
          />
        ))}
    </CardsContainer>
  )
}
