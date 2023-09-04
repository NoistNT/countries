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
  if (!form.countries || !form.countries.length)
    errors.countries = 'Select a country'

  // Difficulty validation
  if (!form.difficulty) errors.difficulty = 'Select a difficulty'

  // Season validation
  if (!form.season) errors.season = 'Select a season'

  return errors
}
export default validate
