'use client'
import AdminInfo from '@/components/AdminInfo'
import Button, {
  primaryButtonProps,
  secondaryButtonProps,
} from '@/components/Button'
import Counter from '@/components/Counter'
import ElementWrapper from '@/components/ElementWrapper'
import Form from '@/components/Form'
import User from '@/components/User'
import UserInfo from '@/components/UserInfo'

const Home = () => {
  return (
    <section>
      <Button {...primaryButtonProps} />
      <Button {...secondaryButtonProps} />
    </section>
  )
}

export default Home
