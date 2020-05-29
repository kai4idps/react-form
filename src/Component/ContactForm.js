import React, { useState } from "react"
import { Button, Form } from "reactstrap"
import Select from "react-select"
import _, { flowRight as compose } from "lodash"
// import PropTypes from "prop-types"

import "bootstrap/dist/css/bootstrap.css"
import withBasicNotify from "./UI/withBasicNotify"
import CustomFormInputGroup from "./UI/CustomFormInputGroup"
import CustomSelectGroup from "./UI/CustomSelectGroup"
import USER_OPTION from "../util/type"

const ContactForm = props => {
  const [formData, setFormData] = useState({
    email: undefined,
    password: undefined,
    type: []
  })

  let updateInput = {}
  const checkRequire = () => {
    if (formData.email === "" || formData.password === "") {
      return true
    }
  }

  const [selectedType, setSelectedType] = useState(
    formData?.type
      ? USER_OPTION.find(item => formData.type === item.value)
      : undefined
  )

  const onFieldChange = (key, value) => {
    console.log(key, value)

    setFormData({
      ...formData,
      [key]: value
    })
  }
  //   const changeSelectValue = (key, value) => {
  //     setformOption({ ...formOption, mySelectKey: key })
  //     onFieldChange("mySelectKey", key)
  //   }

  const onSubmit = e => {
    e.preventDefault()
    props.notify.success("success")
    console.log(selectedType.map(item => item.value))
    setFormData({
      ...formData,
      type: selectedType
    })
    console.log(formData)
    updateInput = {
      email: formData.email,
      password: formData.password,
      type: selectedType.map(item => item.value)
    }
    console.log(updateInput)
  }
  console.log(selectedType)

  const style = {
    margin: "auto",
    maxWidth: "300px"
  }

  return (
    <Form style={style}>
      <CustomFormInputGroup
        name="email"
        label="Email"
        type="email"
        onChange={onFieldChange}
      />
      <CustomFormInputGroup
        name="password"
        label="Password"
        onChange={onFieldChange}
        type="password"
      />
      {formData.email}
      {formData.password}
      <Button
        color="primary"
        type="submit"
        onClick={onSubmit}
        disabled={checkRequire()}
      >
        Submit
      </Button>
      {/* <Select
        label="狀態"
        value={USER_OPTION.filter(
          ({ value }) => value === formOption.mySelectKey
        )}
        options={USER_OPTION}
        onChange={({ value }) => changeSelectValue(value)}
      ></Select> */}
      <CustomSelectGroup
        label="類型"
        fieldName="type"
        value={selectedType}
        options={USER_OPTION}
        isRequired={true}
        onFieldChange={setSelectedType}
        isMulti={true}
      />
    </Form>
  )
}

// ContactForm.propTypes = {
//   email: PropTypes.string.isRequired,
//   Password: PropTypes.string.isRequired
// }
export default compose(withBasicNotify)(ContactForm)
