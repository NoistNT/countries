import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <h1>Welcome to Landing Page</h1>
      <NavLink to='/countries'>Enter</NavLink>
    </div>
  )
}
