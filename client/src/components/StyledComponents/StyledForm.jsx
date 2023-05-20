import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12vh auto;
  background-color: #000000ab;
  width: 20rem;
  padding: 2rem;
  border-radius: 0.5rem;
  color: #ffffffe0;
  transition: 0.11s;

  &:hover {
    box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    -webkit-box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    -moz-box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    transition: 0.11s;
  }
`

export const FormGroup = styled.div`
  margin: 1rem;
`

export const Label = styled.label`
  font-size: medium;
  font-family: 'Raleway', sans-serif;
  padding: 0 0 0.5rem 0;
`

export const Input = styled.input`
  outline: 0;
  border: none;
  border-radius: 0.4rem;
  background-color: #121212;
  font-family: 'Raleway', sans-serif;
  color: #ffffffe0;
  font-size: 0.95rem;
  padding: 0.5rem;
  flex-grow: 1;
  text-align: center;
  margin-bottom: 0.3rem;
`

export const ErrorSpan = styled.span`
  color: red;
`

export const RadioContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`

export const RadioLabel = styled.label`
  margin-right: 1rem;
`

export const SubmitButton = styled.button`
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  color: #ffffffe0;
  background-color: #6d2d7a;
  border: none;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  margin: 2rem 0;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`
