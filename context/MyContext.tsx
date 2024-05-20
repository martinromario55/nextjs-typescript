import { FC, createContext, useState } from 'react'

type MyContextData = {
  value: string
  setValue: (newValue: string) => void
}

type MyContextProviderProp = {
  children: React.ReactNode
}

export const MyContext = createContext<MyContextData | undefined>(undefined)

export const MyContextProvider: FC<MyContextProviderProp> = ({ children }) => {
  const [value, setValue] = useState<string>('')

  const contextValue: MyContextData = {
    value,
    setValue,
  }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}
