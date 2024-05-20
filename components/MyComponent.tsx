import { MyContext } from '@/context/MyContext'
import React, { useContext } from 'react'

const MyComponent = () => {
  const context = useContext(MyContext)

  if (!context) {
    throw new Error('MyComponent must be used within a MyContextProvider')
  }

  const { value, setValue } = context

  return (
    <div>
      <p>Value: {value}</p>
      <input
        type="text"
        name=""
        id=""
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter a new value"
      />
    </div>
  )
}

export default MyComponent
