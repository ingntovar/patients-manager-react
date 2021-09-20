import React, { Fragment } from "react"

const Form = ({ name, owner, date, time, symptoms, setName, setOwner, setDate, setTime, setSymptoms, setSubmits }) => {
  const sendFormData = () => {
    setSubmits((prev) =>
      prev.concat({
        id: Date.now(),
        name,
        owner,
        date,
        time,
        symptoms,
      })
    )
  }

  return (
    <>
      <label>Pet Name</label>
      <input type="text" name="pet" className="u-full-width" placeholder="Pet Name" onChange={(e) => setName(e.target.value)} />
      <label>Owner Name</label>
      <input type="text" name="owner" className="u-full-width" placeholder="Owner Name" onChange={(e) => setOwner(e.target.value)} />
      <label>Date</label>
      <input type="date" name="date" className="u-full-width" onChange={(e) => setDate(e.target.value)} />
      <label>Time</label>
      <input type="time" name="time" className="u-full-width" onChange={(e) => setTime(e.target.value)} />
      <label>Symptoms</label>
      <textarea name="symptoms" className="u-full-width" onChange={(e) => setSymptoms(e.target.value)}></textarea>

      <button type="submit" className="u-full-width button-primary" onClick={() => sendFormData()}>
        Add Appoinment
      </button>
    </>
  )
}

export default Form
