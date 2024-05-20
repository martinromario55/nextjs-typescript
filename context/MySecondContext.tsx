import { createContext, useState } from 'react'

interface MyContextProps {
  count: number
  increment: () => void
  decrement: () => void
}

export const MySecondContext = createContext<MyContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
})

interface MyProviderProps {
  children: React.ReactNode
}

const MySecondProvider = ({ children }: MyProviderProps) => {
  const [count, setCount] = useState<number>(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <MySecondContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MySecondContext.Provider>
  )
}

export default MySecondProvider
