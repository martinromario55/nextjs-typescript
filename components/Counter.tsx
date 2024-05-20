'use client'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setcount] = useState<number>(0)
  return (
    <div>
      <button
        onClick={() => setcount(count + 1)}
        className="bg-slate-400 p-4 rounded m-2 font-semibold"
      >
        +
      </button>
      <span className="bg-slate-200 p-4 rounded m-2 font-semibold">
        {count}
      </span>
      <button
        onClick={() => setcount(count - 1)}
        className="bg-slate-400 p-4 rounded m-2 font-semibold"
      >
        -
      </button>
    </div>
  )
}

export default Counter
