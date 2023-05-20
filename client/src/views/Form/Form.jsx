import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createActivity } from '../../redux/actions/actions'
import validate from './validate'
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  ErrorSpan,
  RadioContainer,
  RadioLabel,
  SubmitButton
} from '../../components/StyledComponents/StyledForm'

export default function Form() {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({
    name: '',
    country: '',
    difficulty: '',
    season: ''
  })
  const [activity, setActivity] = useState({
    name: '',
    country: '',
    difficulty: '',
    duration: '',
    season: ''
  })

  const cleanActivity = () => {
    setActivity({
      name: '',
      country: '',
      difficulty: '',
      duration: '',
      season: ''
    })
  }

  const handleChange = (e) => {
    const property = e.target.name
    const value = e.target.value
    setActivity({ ...activity, [property]: value })
    setErrors(validate({ ...activity, [property]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!Object.keys(errors).length) dispatch(createActivity(activity))
    cleanActivity()
  }

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <h1>Create activity</h1>
        <FormGroup>
          {/* <Label htmlFor='name'>Name </Label>
          <br /> */}
          <Input
            type='text'
            name='name'
            placeholder='Activity name'
            value={activity.name}
            onChange={handleChange}
          />
          <br />
          {errors.name && <ErrorSpan>{errors.name}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          {/* <Label htmlFor='country'>Country </Label>
          <br /> */}
          <Input
            type='text'
            name='country'
            placeholder='Country name'
            value={activity.countries}
            onChange={handleChange}
          />
          <br />
          {errors.country && <ErrorSpan>{errors.country}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          {/* <Label htmlFor='duration'>Duration </Label> */}
          <Input
            type='text'
            name='duration'
            placeholder='Activity duration in hs'
            value={activity.duration}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='difficulty'>Difficulty</Label>
          <RadioContainer>
            <RadioLabel>
              1
              <Input
                type='radio'
                name='difficulty'
                value='1'
                onChange={handleChange}
              />
            </RadioLabel>
            <RadioLabel>
              2
              <Input
                type='radio'
                name='difficulty'
                value='2'
                onChange={handleChange}
              />
            </RadioLabel>
            <RadioLabel>
              3
              <Input
                type='radio'
                name='difficulty'
                value='3'
                onChange={handleChange}
              />
            </RadioLabel>
            <RadioLabel>
              4
              <Input
                type='radio'
                name='difficulty'
                value='4'
                onChange={handleChange}
              />
            </RadioLabel>
            <RadioLabel>
              5
              <Input
                type='radio'
                name='difficulty'
                value='5'
                onChange={handleChange}
              />
            </RadioLabel>
          </RadioContainer>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='season'>Season</Label>
          <RadioContainer>
            <RadioLabel>
              Summer
              <Input
                type='radio'
                name='season'
                value='Summer'
                onChange={handleChange}
              />
            </RadioLabel>
            <RadioLabel>
              Autumn
              <Input
                type='radio'
                name='season'
                value='Autumn'
                onChange={handleChange}
              />
            </RadioLabel>
            <RadioLabel>
              Winter
              <Input
                type='radio'
                name='season'
                value='Winter'
                onChange={handleChange}
              />
            </RadioLabel>
            <RadioLabel>
              Spring
              <Input
                type='radio'
                name='season'
                value='Spring'
                onChange={handleChange}
              />
            </RadioLabel>
          </RadioContainer>
        </FormGroup>
        <SubmitButton type='submit'>Create</SubmitButton>
      </FormContainer>
    </div>
  )
}
