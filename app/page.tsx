import AdminInfo from '@/components/AdminInfo'
import User from '@/components/User'
import UserInfo from '@/components/UserInfo'
import React from 'react'

const Home = () => {
  return (
    <section>
      <UserInfo
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={['earth', 'usa']}
      />
      <AdminInfo
        username="huxn"
        email="huxn@gmail.com"
        age={20}
        location={['Mars', 'Olympia']}
        admin="yes"
      />
    </section>
  )
}

export default Home
