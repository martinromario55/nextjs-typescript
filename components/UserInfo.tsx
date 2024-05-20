export type InfoProps = {
  username: string
  email: string
  age: number
  location: string[]
}

const UserInfo = ({ username, email, age, location }: InfoProps) => {
  return (
    <div>
      <ul>
        <li>Username: {username}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
        <li>Location: {JSON.stringify(location)}</li>
      </ul>
    </div>
  )
}

export default UserInfo
