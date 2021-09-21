import React, { useState } from 'react'

const Form = () => {

  // save form data in an object
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    dob: '',
    colour: '',
    salary: '',
  })

  // save errors in an object that will be initialised on the form data
  const [formErrors, setFormErrors] = React.useState({
    name: '',
    email: '',
    dob: '',
    colour: '',
    salary: '',
  })

  const handleChange = (e) => {
    // key, value matches state
    setFormData({ ...formData, [e.target.id]: e.target.value })
    console.log('change')
    // setFormErrors({})
  }

  const handleSubmit = (e) => {  
    e.preventDefault()
    setFormErrors({ ...formData })

    // check for empty fields on each form field
    for (const field in formErrors) {
      if (!formErrors[field]) {
        formErrors[field] = 'Cannot be empty'
      }
    }

    // check for an @ sign in email address
    if (formData.email && !formData.email.includes('@')) {
      formErrors.email = 'Invalid email'
    }

    setFormErrors({ ...formErrors, [e.target.id]: e.target.value })
  }

  // default to £30K
  const [salary, setSalary] = useState(30000)

  const handleSalary = e => {
    setSalary(e.target.value)
  }

  console.log(formErrors)

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div>
        <h2>Form</h2>
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" placeholder="Full Name" aria-required="true" onChange={handleChange}/>
        <small className="error">{formErrors.name}</small>
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" placeholder="youremail@domain.com" aria-required="true" onChange={handleChange}/>
        <small className="error">{formErrors.email}</small>
      </div>
      <div>
        <label htmlFor="dob">Date of Birth: </label>
        <input type="date" id="dob" name="dob" aria-required="true" onChange={handleChange}/><br />
        <small className="error">{formErrors.dob}</small>
      </div>
      <div>
        <label htmlFor="colour">Favourite Colour: </label>
        <input type="color" id="colour" name="colour" aria-required="true" onChange={handleChange}></input>
        <small className="error"></small>
      </div>
      <div>
        <label htmlFor="salary">Salary: </label>
        <span>£{salary}</span><br />
        <span>£30K</span><input type="range" id="salary" min="30000" max="50000" step="1000" onChange={handleSalary}></input><span>£50K</span>
        <small className="error"></small>
      </div>
      <div>
        <input type="submit"></input>
      </div>
    </form>
    </div>
  )
}

export default Form