import { Button } from '../Button'
import { Input } from '../Input'

export const LoginForm = () => {
  return (
    <form className='ml-[10rem] flex flex-col gap-3 w-full'>
      <Input
        type='text'
        placeholder='Введіть імя користувача'
        variant='LOGIN'
      />
      <Input type='password' placeholder='Введіть пароль' variant='LOGIN' />
      <Button variant='primary' typeOfButton='submit'>
        Увійти
      </Button>
    </form>
  )
}
