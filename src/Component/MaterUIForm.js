import React, { useState } from "react"
import Button from "../Component/UI/Button"
import TextField from "../Component/UI/TextField"

import ContactForm from "./ContactForm"

const MaterUIForm = () => {
  const [inputData, setInputData] = useState("")

  return (
    <div>
      {/* <TextField
        label="名字"
        value={inputData}
        onChange={e => {
          setInputData(e.target.value)
        }}
      />
      <Button /> */}
      <ContactForm />
    </div>
  )
}

export default MaterUIForm
