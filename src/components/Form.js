import React, { useState } from 'react'

const Form = () => {

  const [formdata, setFormData] = React.useState({
    name: '',
    email: '',
    dob: '',
    colour: '',
    salary: '',
  })

  const [formError, setFormError] = React.useState('')

  const handleChange = (e) => {
    // key, value matches state
    setFormData({ ...formdata, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    for (const field in formdata) {

      console.log(formdata[field])

      if (formdata[field] === '') {
        setFormError('must not be empty')
      }
    }

    if (!formdata.email.includes('@')) {
      console.log('not a valid email')
    }

    // alert(`Submitting the form ${JSON.stringify(formdata, null, 2)}`)
  }

  const [salary, setSalary] = useState(30000)

  const handleSalary = e => {
    setSalary(e.target.value)
  }

  // const colorVariable = "--clr-accent"

  // const handleColour = e => {
  //   document.documentElement.style.setProperty(colorVariable, e.target.value)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Form</h2>
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" placeholder="Full Name" aria-required="true" onBlur={handleChange}/>
        <small className="error">{formError}</small>
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" placeholder="youremail@domain.com" aria-required="true" onBlur={handleChange}/>
        <small className="error">{formError}</small>
      </div>
      <div>
        <label htmlFor="dob">Date of Birth: </label>
        <input type="date" id="dob" name="dob" onBlur={handleChange}/>
        <small className="error">{formError}</small>
      </div>
      <div>
        <label htmlFor="colour">Favourite Colour: </label>
        <input type="color" id="colour" name="colour" onBlur={handleChange}></input>
        {/* onChange={handleColour} */}
        <small className="error">{formError}</small>
      </div>
      <div>
        <label htmlFor="salary">Salary: </label>
        <span>£{salary}</span><br />
        <span>£30K</span><input type="range" id="salary" min="30000" max="50000" step="1000" onChange={handleSalary} onBlur={handleChange}></input><span>£50K</span>
        <small className="error">{formError}</small>
      </div>
      <div>
        <input type="submit"></input>
      </div>
    </form>
  )
}

export default Form