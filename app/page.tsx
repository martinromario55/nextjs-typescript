'use client'
import AdminInfo from '@/components/AdminInfo'
import Counter from '@/components/Counter'
import ElementWrapper from '@/components/ElementWrapper'
import Form from '@/components/Form'
import User from '@/components/User'
import UserInfo from '@/components/UserInfo'

const Home = () => {
  return (
    <section>
      <ElementWrapper elementType="div" className="border">
        <p>This is a div element with a class name of border</p>
      </ElementWrapper>

      <ElementWrapper
        elementType="h1"
        className="border text-2xl"
        onClick={() => alert('h1 clicked')}
      >
        Header Text
      </ElementWrapper>

      <ElementWrapper
        elementType="button"
        className="bg-slate-400 p-4 text-2xl"
        onClick={() => alert('button clicked')}
      >
        Click me
      </ElementWrapper>
    </section>
  )
}

export default Home
