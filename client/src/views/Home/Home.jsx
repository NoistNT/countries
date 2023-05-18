import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../components/Cards'
import { getCountries } from '../../redux/actions/actions'

export default function Home() {
  const dispatch = useDispatch()
  const { countries } = useSelector((state) => state)

  // Mount component
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div>
      <Cards countries={countries} />
    </div>
  )
}
