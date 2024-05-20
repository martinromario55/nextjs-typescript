'use client'
import AdminInfo from '@/components/AdminInfo'
import Button, {
  primaryButtonProps,
  secondaryButtonProps,
} from '@/components/Button'
import Counter from '@/components/Counter'
import ElementWrapper from '@/components/ElementWrapper'
import Form from '@/components/Form'
import MyComponent from '@/components/MyComponent'
import MySecondComponent from '@/components/MySecondComponent'
import User from '@/components/User'
import UserInfo from '@/components/UserInfo'
import { MyContextProvider } from '@/context/MyContext'
import MySecondProvider from '@/context/MySecondContext'

const Home = () => {
  return (
    <section>
      <MySecondProvider>
        <MySecondComponent />
      </MySecondProvider>
    </section>
  )
}

export default Home
