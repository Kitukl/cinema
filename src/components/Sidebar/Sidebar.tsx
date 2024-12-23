import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../Button'
import { Input } from '../Input'
import { ListPopup } from '../ListPopup/ListPopup'
import { LoginPopup } from '../LoginPopup'
import { User } from '../User'
import { list } from '../lists'

export const Sidebar = () => {
  const navigate = useNavigate()
  const [isOpenListPopup, setIsOpenListPopup] = useState(false)
  const [isOpenLoginPopup, setIsOpenLoginPopup] = useState(false)
  return (
    <aside className='bg-black px-20 py-5 h-full fixed'>
      <h2 className='text-red-600 font-extrabold font-5xl uppercase text-4xl mb-10'>
        Watchlists
      </h2>
      <Input type='text' placeholder='Пошук' />
      <div className='flex flex-col my-6'>
        <Button variant='secondary' click={() => navigate('/')}>
          <img src='/src/assets/home.svg' alt='' />
          <p>Головна</p>
        </Button>
        <Button variant='secondary' click={() => navigate('/history')}>
          <img src='/src/assets/history.svg' alt='' />
          <p>Історія</p>
        </Button>
        <Button variant='primary' click={() => setIsOpenListPopup(true)}>
          + Додати список
        </Button>
      </div>
      <h4 className='uppercase font-bold text-lg'>Мій список</h4>
      <div className='flex flex-col mt-4 gap-3 overflow-scroll max-h-[420px]'>
        {list.map(el => (
          <Button variant='list' key={el}>
            {el}
          </Button>
        ))}
      </div>
      <div className='mt-auto'>
        <User
          isLogged={false}
          click={() => {
            setIsOpenLoginPopup(true)
          }}
        />
      </div>
      <ListPopup state={isOpenListPopup} setState={setIsOpenListPopup} />
      <LoginPopup state={isOpenLoginPopup} setState={setIsOpenLoginPopup} />
    </aside>
  )
}
