import React from 'react'

type Props = {
  name: String
}

function Greetings({ name }: Props) {
  return <div>Hello, {name}</div>
}

export default Greetings
