import { React, useState, useEffect } from "react"
import Form from "./components/Form"
import Rendez from "./components/Rendez"

const App = () => {
  const [name, setName] = useState()
  const [owner, setOwner] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [symptoms, setSymptoms] = useState()

  let fromLocalS = JSON.parse(localStorage.getItem("appo"))
  if (!fromLocalS) {
    fromLocalS = []
  }

  const [submits, setSubmits] = useState(fromLocalS)

  useEffect(() => {
    let fromLocalS = JSON.parse(localStorage.getItem("appo"))

    console.log("esta gran puta mierda no sirve")

    if (fromLocalS) {
      localStorage.setItem("appo", JSON.stringify(submits))
    } else {
      localStorage.setItem("appo", JSON.stringify([]))
    }
  }, [submits])

  return (
    <>
      <h1>Patients App</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h1>Crear cita</h1>
            <Form setName={setName} setOwner={setOwner} setDate={setDate} setTime={setTime} setSymptoms={setSymptoms} setSubmits={setSubmits} name={name} owner={owner} date={date} time={time} symptoms={symptoms} />
          </div>
          <div className="one-half column">
            <h1>Admin yor Appoinments</h1>
            {submits.map((submit) => (
              <Rendez key={submit.id} submit={submit} setSubmits={setSubmits} submits={submits} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
