import { TUser } from './types'

export const User = ({ isLogged, username }: TUser) => {
  return (
    <button className='flex flex-row border-2 w-[230px] gap-4 fixed top-[850px] p-1 rounded-md'>
      <img src='/src/assets/icons8-user-50.png' alt='logo' />
      <p className='self-center'>{isLogged ? username : 'GUEST'}</p>
    </button>
  )
}
