import React from 'react'
import { useState } from 'react'

function ImplementingColor() {
  const [colorScheme, setColorScheme] = useState("light");

  const handleColorSchemeChange = (e) => {
    setColorScheme(e.target.value);
  }
  return (
    <div>
      <select value={colorScheme} onChange={handleColorSchemeChange}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      </select>
    </div>
  )
}

export default ImplementingColor
