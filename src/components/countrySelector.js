import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return (<div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
  <div className="app">
      <h3 style={{ color: "black" }}>Location</h3>
  <Select options={options} value={value} onChange={changeHandler} />
  </div>
  </div>
  )
}

export default CountrySelector