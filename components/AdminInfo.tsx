import { InfoProps } from './UserInfo'

type AdminInfoProps = InfoProps & {
  admin: string
}

const AdminInfo = ({
  username,
  email,
  age,
  location,
  admin,
}: AdminInfoProps) => {
  return (
    <div>
      <ul>
        <li>Username: {username}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
        <li>Location: {JSON.stringify(location)}</li>
        <li>Admin: {admin}</li>
      </ul>
    </div>
  )
}

export default AdminInfo
