import User from '@/components/User'
import React from 'react'

const Home = () => {
  return (
    <section>
      <User name="alex" age={20} isStudent={true} />
    </section>
  )
}

export default Home
