import React from 'react'
import Card from './Card'
import { CardsContainer } from './StyledComponents/StyledCards'

export default function Cards({ countries }) {
  return (
    <CardsContainer>
      {countries?.map((country) => (
        <Card key={country.id} country={country} />
      ))}
    </CardsContainer>
  )
}
