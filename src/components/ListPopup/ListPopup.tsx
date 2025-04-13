import { Button } from '../Button'
import { FilmPanel } from '../FilmPanel/FilmPanel'
import { Input } from '../Input'
import { PopupTemplate } from '../PopupTemplate'
import { TListPopup } from './TListPopup'

import { useEffect, useState } from 'react'

import axios from 'axios'
import { TPanel } from '../FilmPanel/types'

const parseJwt = (token: string) => {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    )
    return JSON.parse(jsonPayload)
  } catch (e) {
    console.error('Error parsing JWT:', e)
    return null
  }
}

export const ListPopup = ({ state, setState }: TListPopup) => {
  const [listTitle, setListTitle] = useState('')
  const [title, setTitle] = useState('')
  const [temp, setTemp] = useState('')
  const [film, setFilm] = useState<null | TPanel>(null)
  const [films, setFilms] = useState<TPanel[]>([])
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = parseJwt(token)
      console.log('Decoded JWT:', decoded)
      setUserId(decoded.userId)
      if (decoded?.userId) {
        setUserId(decoded.userId)
      } else {
        console.error('User ID не знайдено в токені')
      }
    } else {
      console.error('Токен відсутній у localStorage')
    }
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return
      try {
        const { data } = await axios.get(
          `http://localhost:5218/users/${userId}`
        )
        setUsername(data.username)
      } catch (err) {
        console.error('Помилка при отриманні користувача:', err)
      }
    }

    fetchUser()
  }, [userId])

  useEffect(() => {
    const findFilm = async () => {
      if (!title) return
      try {
        const { data } = await axios.get(`http://localhost:5218/films/${title}`)
        setFilm(data)
      } catch (err) {
        console.error('Помилка при пошуку фільму:', err)
        setFilm(null)
      }
    }

    findFilm()
  }, [title])

  const handleClick = async () => {
    if (!userId || !listTitle || films.length === 0) {
      console.error(
        'Помилка: відсутні необхідні дані (userId, listTitle або films)'
      )
      return
    }

    const token = localStorage.getItem('token')
    const filmIds = films.map(f => f.id)

    await axios.post(
      'http://localhost:5218/add/list',
      {
        title: listTitle,
        userId: userId,
        filmsId: filmIds,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    window.location.reload()
  }

  return (
    <PopupTemplate
      title='Створіть список для перегляду'
      isOpen={state}
      setIsOpen={setState}
    >
      <div className='flex flex-col w-2/3 gap-y-3'>
        <div className='flex flex-row'>
          <p className='font-bold w-48 self-center'>Назва списку</p>
          <Input
            placeholder=''
            type='text'
            variant='SEARCH'
            change={e => setListTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-row gap-3'>
          <p className='font-bold w-48 self-center'>Пошук фільму</p>
          <Input
            placeholder=''
            type='text'
            variant='SEARCH'
            change={e => setTemp(e.target.value)}
          />
          <Button variant='secondary' click={() => setTitle(temp)}>
            Пошук
          </Button>
        </div>

        <div className='overflow-y-scroll max-h-[200px]'>
          {films.map(e => (
            <FilmPanel
              inArray={true}
              key={e.title}
              title={e.title}
              year={e.year}
              rating={e.rating}
              onSave={() =>
                setFilms(prev => prev.filter(f => f.title !== e.title))
              }
            />
          ))}
        </div>

        <Button variant='primary' click={handleClick}>
          Зберегти список
        </Button>

        {film && (
          <FilmPanel
            inArray={false}
            title={film.title}
            rating={film.rating}
            year={film.year}
            onSave={() => {
              if (film) setFilms(prev => [...prev, film])
            }}
          />
        )}
      </div>
    </PopupTemplate>
  )
}
