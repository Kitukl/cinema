import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confPass, setConfPass] = useState('')
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      if (password !== confPass) {
        alert('Паролі не співпадають!')
        return
      }
      const response = await axios.post('http://localhost:5218/auth/register', {
        username,
        password,
      })
      if (response.status === 200) {
        navigate('/')
      }
    } catch (e) {
      console.error('Реєстрація не вдалася', e)
    }
  }

  return (
    <main className='flex flex-col items-center mx-[30rem] my-[10rem]'>
      <h2 className='text-6xl mb-10'>Зареєструйтесь</h2>
      <div className='w-[50%]'>
        <form className='flex flex-col gap-3 w-full'>
          <Input
            type='text'
            placeholder='Введіть ім’я користувача'
            variant='LOGIN'
            change={e => setUsername(e.target.value)}
          />
          <Input
            type='password'
            placeholder='Введіть пароль'
            variant='LOGIN'
            change={e => setPassword(e.target.value)}
          />
          <Input
            type='password'
            placeholder='Підтвердіть пароль'
            variant='LOGIN'
            change={e => setConfPass(e.target.value)}
          />
          <Button variant='primary' typeOfButton='button' click={handleClick}>
            Зареєструватися
          </Button>
        </form>
      </div>
    </main>
  )
}
