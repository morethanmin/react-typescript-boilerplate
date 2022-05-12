import React, { useReducer, useState } from 'react'

type Action = { type: 'INCREASE' } | { type: 'DECREASE' }

function reducer(state: number, action: Action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    default:
      throw new Error('Unhandled action')
  }
}

type Props = {}

function Counter({}: Props) {
  const [count, dispatch] = useReducer(reducer, 0)
  const handleIncreaseClick = () => dispatch({ type: 'INCREASE' })
  const handleDecreaseClick = () => dispatch({ type: 'DECREASE' })

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncreaseClick}>+1</button>
      <button onClick={handleDecreaseClick}>-1</button>
    </div>
  )
}

export default Counter
