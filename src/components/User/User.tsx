import { Button } from '../Button'
import { TUser } from './types'

export const User = ({ isLogged, username, click, handleLogout }: TUser) => {
  return (
    <button
      className='flex flex-row border-2 w-[230px] gap-4 fixed top-[850px] p-1 rounded-md'
      onClick={click}
    >
      <img src='/src/assets/icons8-user-50.png' alt='logo' />
      <p className='self-center'>{isLogged ? username : 'GUEST'}</p>
      <div className='ml-10'>
        {isLogged ? (
          <Button variant='primary' click={handleLogout}>
            Вихід
          </Button>
        ) : (
          ''
        )}
      </div>
    </button>
  )
}
