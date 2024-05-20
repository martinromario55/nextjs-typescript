import { FC } from 'react'

type Shape = {
  name: string
  age: number
}
const User: FC<Shape> = ({ name, age }) => {
  return (
    <main>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </main>
  )
}

export default User
