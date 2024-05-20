// type UserProps = { name: string; age: number; isStudent: boolean }
interface UserProps {
  name: string
  age: number
  isStudent: boolean
}

const User = ({ name, age, isStudent }: UserProps) => {
  return (
    <main>
      <h1>User</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
    </main>
  )
}

export default User
