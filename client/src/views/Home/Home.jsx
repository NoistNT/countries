import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../redux/actions/actions'
import Cards from '../../components/Cards'
import Menu from '../../components/Menu'
import Paginate from '../../components/Paginate'

export default function Home() {
  const dispatch = useDispatch()
  const { countries, isSorted } = useSelector((state) => state)
  const [currentPage, setCurrentPage] = useState(1)
  const countriesPerPage = 8
  const totalPages = Math.ceil(countries.length / countriesPerPage)

  useEffect(() => {
    if (!isSorted) dispatch(getCountries())
  }, [dispatch, isSorted])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  )

  return (
    <div>
      <Menu />
      <Paginate
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Cards countries={currentCountries} />
      <Paginate
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
