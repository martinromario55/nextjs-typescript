'use client'
import { useRef, useState } from 'react'

type formData = {
  name: string
  email: string
  password: string
}

const Form = () => {
  const [formData, setFormData] = useState<formData>({
    name: '',
    email: '',
    password: '',
  })

  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nameVal = name.current!.value
    const emailVal = email.current!.value
    const passwordVal = password.current!.value

    // console.log(nameVal)
    // console.log(emailVal)
    // console.log(passwordVal)
    setFormData({
      name: nameVal,
      email: emailVal,
      password: passwordVal,
    })
    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={name} placeholder="name" />
        <input type="email" ref={email} placeholder="email" />
        <input type="password" ref={password} placeholder="password" />
        <button type="submit">Submit</button>
      </form>

      <section>
        <h1>Name: {formData.name}</h1>
        <h1>Email: {formData.email}</h1>
        <h1>Password: {formData.password}</h1>
      </section>
    </div>
  )
}

export default Form
