import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/countries'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  )
}
