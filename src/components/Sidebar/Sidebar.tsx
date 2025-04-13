import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../Button'
import { ListPopup } from '../ListPopup/ListPopup'
import { LoginPopup } from '../LoginPopup'
import { User } from '../User'

import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const Sidebar = () => {
  const navigate = useNavigate()
  const [isOpenListPopup, setIsOpenListPopup] = useState(false)
  const [isOpenLoginPopup, setIsOpenLoginPopup] = useState(false)
  const [data, setData] = useState([])
  const [user, setUser] = useState<any>(null)

  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return

      const decodedToken = jwt_decode(token)
      const userId = decodedToken.userId
      try {
        const userVal = await axios.get(
          `http://localhost:5218/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        console.log('User data:', userVal.data)
        setUser(userVal.data)
      } catch (e) {
        console.error('Не вдалося отримати дані користувача:', e)
      }
    }

    fetchUser()
  }, [token])

  useEffect(() => {
    const fetch = async () => {
      if (!token) return

      const decodedToken = jwt_decode(token)
      const userId = decodedToken.userId

      try {
        const res = await axios.get(`http://localhost:5218/list/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setData(res.data)
      } catch (e) {
        console.error('Не вдалося отримати списки:', e)
      }
    }

    fetch()
  }, [token])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
    window.location.reload()
  }

  return (
    <aside className='bg-black px-20 py-5 h-full fixed'>
      <h2 className='text-red-600 font-extrabold font-5xl uppercase text-4xl mb-10'>
        Watchlists
      </h2>
      <div className='flex flex-col my-6'>
        <Button variant='secondary' click={() => navigate('/')}>
          <img src='/src/assets/home.svg' alt='' />
          <p>Головна</p>
        </Button>
        <Button variant='primary' click={() => setIsOpenListPopup(true)}>
          + Додати список
        </Button>
      </div>
      <h4 className='uppercase font-bold text-lg'>Мої списки</h4>
      <div className='flex flex-col mt-4 gap-3 max-h-[420px]'>
        {data.map(el => (
          <Button
            variant='list'
            key={el.id}
            click={() => navigate(`/list/${el.id}`)}
          >
            {el.title}
          </Button>
        ))}
      </div>
      <div className='mt-auto flex items-center'>
        {user ? (
          <>
            <User
              isLogged={true}
              username={user.userName}
              click={() => setIsOpenLoginPopup(true)}
              handleLogout={handleLogout}
            />
          </>
        ) : (
          <User
            isLogged={false}
            click={() => {
              setIsOpenLoginPopup(true)
            }}
          />
        )}
      </div>
      <ListPopup state={isOpenListPopup} setState={setIsOpenListPopup} />
      <LoginPopup state={isOpenLoginPopup} setState={setIsOpenLoginPopup} />
    </aside>
  )
}
