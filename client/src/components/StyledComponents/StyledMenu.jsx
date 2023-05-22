import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #22223b;
  padding-bottom: 1.3rem;

  @media (min-width: 767px) {
    flex-direction: row;
    padding-top: 0;
    padding-bottom: 1rem;
  }
`
export const SelectLabel = styled.label`
  font-size: medium;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
`
export const SelectBox = styled.select`
  width: 100%;
  max-width: 15rem;
  padding: 0.45rem;
  margin: 0.6rem 0;
  font-size: 0.9rem;
  font-family: 'Raleway', sans-serif;
  outline: 0;
  border: none;
  border-radius: 0.4rem;
  background-color: #121212;
  color: #ffffffe0;
  transition: 0.11s;
  text-align: center;

  &:hover {
    box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    -webkit-box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    -moz-box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    transition: 0.11s;
  }

  @media (min-width: 767px) {
    width: 100%;
    padding: 0.35rem;
  }
`
