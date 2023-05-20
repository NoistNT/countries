const validName = /^[A-Za-z\s.&-]+$/
const validLength = /^.{0,40}$/

const validate = (form) => {
  const errors = {}

  // Activity name validation
  if (!validName.test(form.name)) errors.name = 'Invalid activity name'
  if (!validLength.test(form.name))
    errors.name = 'Activity name limit is up to 40 characters'
  if (!form.name) errors.name = 'Activity name is required'

  // Country name validation
  if (!validName.test(form.country)) errors.country = 'Invalid country name'
  if (!validLength.test(form.country))
    errors.country = 'Country name limit is up to 40 characters'
  if (!form.country) errors.country = 'Country name is required'

  // Difficulty validation
  if (!form.difficulty) errors.difficulty = 'Select a difficulty'

  // Season validation
  if (!form.season) errors.season = 'Select a season'

  return errors
}
export default validate
