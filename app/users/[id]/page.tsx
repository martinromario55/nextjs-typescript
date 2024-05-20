type UserProps = {
  params: {
    id: number
  }
}

const User = ({ params: { id } }: UserProps) => {
  return <div>User {id}</div>
}

export default User
