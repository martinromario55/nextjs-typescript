import { ReactNode } from "react"

// type UserProps = { name: string; age: number; isStudent: boolean }
interface UserProps {
  children: ReactNode
}

const User = ({ children }: UserProps) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default User
