import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ id, name, flag, continent }) {
  return (
    <div key={id}>
      <Link to={`/countries/${id}`}>
        <img src={flag} alt={name} />
      </Link>
      <h2>{name}</h2>
      <h3>{continent}</h3>
    </div>
  )
}
