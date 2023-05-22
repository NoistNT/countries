import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  transition: 0.11s;

  &:hover {
    box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    -webkit-box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    -moz-box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    transition: 0.11s;
  }

  @media (min-width: 768px) {
    justify-content: center;
    margin-right: 2rem;
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }

  @media (min-width: 1440px) {
    justify-content: flex-end;
  }
`

export const SearchBarInput = styled.input`
  min-height: 1.7rem;
  min-width: 25%;
  outline: 0;
  border: none;
  border-radius: 0.4rem 0 0 0.4rem;
  background-color: #121212;
  color: #ffffffe0;
  font-size: 0.95rem;
  font-family: 'Raleway', sans-serif;

  ::placeholder {
    text-align: center;
  }

  @media (min-width: 768px) {
    min-width: 50%;
  }

  @media (min-width: 1024px) {
    min-width: 40%;
  }

  @media (min-width: 1440px) {
    min-width: 30%;
  }
`

export const SearchBarButton = styled.button`
  font-size: 0.95rem;
  color: #ffffffe0;
  background-color: #6d2d7a;
  border: none;
  border-radius: 0 0.4rem 0.4rem 0;
  font-family: 'Raleway', sans-serif;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`
