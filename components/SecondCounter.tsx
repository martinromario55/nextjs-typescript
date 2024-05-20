import React, { useReducer } from 'react'

type State = {
  count: number
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const SecondCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className="bg-blue-500 p-4 m-2"
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        className="bg-slate-500 p-4 m-2"
      >
        -
      </button>
    </div>
  )
}

export default SecondCounter
