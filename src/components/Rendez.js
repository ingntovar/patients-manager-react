import React from "react"
const Rendez = ({ submit, setSubmits, submits }) => {
  const { id, name, owner, date, time, symptoms } = submit

  function deleteItem() {
    const newSubmits = submits.filter((eachSubmit) => eachSubmit.id !== id)
    setSubmits(newSubmits)
  }

  return (
    <>
      <div className="cita">
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          Owner: <span>{owner}</span>
        </p>
        <p>
          Date: <span>{date}</span>
        </p>
        <p>
          Time: <span>{time}</span>
        </p>
        <p>
          Symptoms: <span>{symptoms}</span>
        </p>
        <button id={id} className="button eliminar u-full-width" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </>
  )
}

export default Rendez
