import styled from 'styled-components'
import landingImg from '../../assets/landingImg.png'

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: #ffffffe0;
  background-image: url(${landingImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const Heading = styled.h1`
  font-size: 2.5rem;
  margin: 0 1rem;
`
export const Subheading = styled.h2`
  font-size: 1.5rem;
  margin: 2rem;
`
export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #8810eb;
  color: #fff;
  border: none;
  border-radius: 0.45rem;
  cursor: pointer;

  &:hover {
    background-color: #730ce7;
  }

  @media (max-width: 375px) {
    padding: 0.75rem 1rem;
  }
`
