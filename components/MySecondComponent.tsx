import { MySecondContext } from '@/context/MySecondContext'
import React, { useContext } from 'react'

const MySecondComponent = () => {
  const { count, increment, decrement } = useContext(MySecondContext)
  return (
    <div>
      <h1 className="text-2xl">Count: {count}</h1>
      <button onClick={increment} className="bg-blue-500 p-4 m-2">
        +
      </button>
      <button onClick={decrement} className="bg-slate-500 p-4 m-2">
        -
      </button>
    </div>
  )
}

export default MySecondComponent
