import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cleanDetail, getCountryById } from '../../redux/actions/actions'
import {
  Container,
  CardContainer,
  Title,
  Image,
  Name,
  DescriptionContainer,
  Items
} from '../../components/StyledComponents/StyledDetail'

export default function Detail() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { country } = useSelector((state) => state)

  // Mount component
  useEffect(() => {
    dispatch(getCountryById(id))
    return () => dispatch(cleanDetail())
  }, [dispatch, id])

  return (
    <Container>
      <CardContainer>
        {country ? (
          <DescriptionContainer>
            <Title>Country Details</Title>
            <Image src={country.flag} alt={country.name} />
            <Name>
              <h2>{country.name}</h2>
            </Name>
            <Items>ID: {country.id}</Items>
            <Items>Continent: {country.continent}</Items>
            <Items>Capital: {country.capital}</Items>
            <Items>Subregion: {country.subregion}</Items>
            <Items>Area: {country.area} km2</Items>
            <Items>Population: {country.population}</Items>
          </DescriptionContainer>
        ) : (
          <h2>Loading...</h2>
        )}
        <DescriptionContainer>
          <Name>
            <h3>Country Activities</h3>
          </Name>
          {country.Activities && country.Activities.length ? (
            country.Activities.map((c) => {
              return (
                <div key={c.name}>
                  <Items>{c.name}</Items>
                  <p>Dificulty: {c.difficulty}</p>
                  <p>Duration: {c.duration} hrs</p>
                  <p>Season: {c.season}</p>
                </div>
              )
            })
          ) : (
            <p>No activities yet</p>
          )}
        </DescriptionContainer>
      </CardContainer>
    </Container>
  )
}
