import React from "react"
import Select from "react-select"
import { FormGroup, Label, Button } from "reactstrap"

const CustomSelectGroup = props => {
  const {
    label,
    fieldName,
    isRequired,
    isMulti,
    isDisabled,
    options,
    onFieldChange,
    onInputChange,
    value
  } = props

  return (
    <FormGroup row>
      <Label for={fieldName}>
        {label} {isRequired && "*"}
      </Label>
      {isMulti && (
        <Button
          className="ml-2"
          onClick={() => {
            onFieldChange(options.filter(item => item.value))
          }}
        >
          全選
        </Button>
      )}
      <div style={{ width: "100%" }}>
        111
        <Select
          placeholder={label}
          isMulti={isMulti || false}
          isDisabled={isDisabled || false}
          value={value}
          options={
            isRequired || isMulti ? options.filter(item => item.value) : options
          }
          onChange={option => {
            !option && isMulti && onFieldChange([])
            option && onFieldChange(option)
          }}
          onInputChange={input => {
            if (onInputChange) onInputChange(input)
          }}
        />
      </div>
    </FormGroup>
  )
}

export default CustomSelectGroup
