import React from "react"
import { Label, Input } from "reactstrap"

const CustomFormInputGroup = props => {
  const { name, label, type, onChange } = props

  return (
    <div>
      <Label>{name}</Label>
      <Input
        name={name}
        label={label}
        type={type}
        onChange={e => onChange(name, e.target.value)}
      ></Input>
    </div>
  )
}

export default CustomFormInputGroup
