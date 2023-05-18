import React from 'react'
import Card from './Card'

export default function Cards({ countries }) {
  return (
    <div>
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
    </div>
  )
}
