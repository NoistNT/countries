import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LandingContainer,
  Heading,
  Subheading,
  Button
} from '../../components/StyledComponents/StyledLanding'

export default function LandingPage() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/countries')
  }

  return (
    <LandingContainer>
      <Heading>Welcome to Countries App</Heading>
      <Subheading>
        Discover information about countries and also amazing activities around
        the world
      </Subheading>
      <Button onClick={handleClick}>Get Started</Button>
    </LandingContainer>
  )
}
