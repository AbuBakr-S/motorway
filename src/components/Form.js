import React, { useState } from 'react'

const Form = () => {

  // set max date on date of birth to current date
  const present = new Date().toISOString().slice(0, 10);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    dob: '',
    colour: '',
    salary: '',
  })

  const [formErrors, setFormErrors] = React.useState({
    name: '',
    email: '',
    dob: '',
    colour: '',
    salary: '',
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {  
    e.preventDefault()
    setFormErrors({ ...formData })

    //check for empty fields on each form field
    for (const field in formData) {
      if (!formData[field]) {
        formErrors[field] = 'Cannot be empty'
      }
    }

    // check for an @ sign in email address
    if (formData.email && !formData.email.match(/@.+\..+/g)) {
      formErrors.email = 'Invalid email'
    }

    setFormErrors({ ...formErrors })
  }

  // default to £30K
  const [salary, setSalary] = useState(30000)

  const handleSalary = e => {
    setSalary(e.target.value)
  }

  console.log('form data', formData)
  console.log('form errors', formErrors)

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div>
        <h2>Form</h2>
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" placeholder="Full Name" aria-required="true" onChange={handleChange}/>
        <small className="error">{formErrors.name}</small>
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" placeholder="youremail@domain.com" aria-required="true" onChange={handleChange}/>
        {formErrors.email && (
          <small className="error">{formErrors.email}</small>
        )}
      </div>
      <div>
        <label htmlFor="dob">Date of Birth: </label>
        <input type="date" id="dob" name="dob" aria-required="true" max={present} onChange={handleChange}/><br />
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