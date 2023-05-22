import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../redux/actions/actions'
import Cards from '../../components/Cards'
import Menu from '../../components/Menu'

export default function Home() {
  const dispatch = useDispatch()
  const { countries, isSorted } = useSelector((state) => state)

  useEffect(() => {
    if (!isSorted) dispatch(getCountries())
  }, [dispatch, isSorted])

  return (
    <div>
      <Menu />
      <Cards countries={countries} />
    </div>
  )
}
