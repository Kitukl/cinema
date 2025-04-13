import axios from 'axios'
import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = async () => {
    try {
      const res = await axios.post('http://localhost:5218/auth/login', {
        username,
        password,
      })

      const token = res.data
      localStorage.setItem('token', token)
      window.location.reload()
    } catch (e) {
      console.error('Login failed', e)
    }
  }

  return (
    <form className='ml-[10rem] flex flex-col gap-3 w-full'>
      <Input
        type='text'
        placeholder='Введіть імя користувача'
        variant='LOGIN'
        change={e => setUsername(e.target.value)}
      />
      <Input
        type='password'
        placeholder='Введіть пароль'
        variant='LOGIN'
        change={e => setPassword(e.target.value)}
      />
      <Button variant='primary' typeOfButton='button' click={handleClick}>
        Увійти
      </Button>
    </form>
  )
}
