import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { FilmCard } from '../../components/FilmCard'
import { Input } from '../../components/Input'
import { Message } from '../../components/Message'

export const Main = () => {
  const [title, setTitle] = useState('')
  const [temp, setTemp] = useState('')
  const [film, setFilm] = useState<null | TFilm>(null)
  const [films, setFilms] = useState<null | TFilm[]>([])

  type TFilm = {
    id: string
    title: string
    year: number
    rating: number
    poster: string
  }

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const { data } = await axios.get('http://localhost:5218/films')
        console.log(data)
        setFilms(data)
      } catch (e) {
        console.error('Failed to fetch films:', e)
      }
    }
    fetchFilms()
  }, [])

  useEffect(() => {
    const findFilm = async () => {
      const { data } = await axios.get(`http://localhost:5218/films/${title}`)
      setFilm(data)
    }
    findFilm()
    console.log(film)
  }, [title])

  return (
    <div className='flex flex-col ml-[500px] w-full'>
      <Message title='Вітаємо на ' secondpart='Watchlists'>
        Шукайте фільми, та створюйте списки з улюбленими фільмами, для того щоб
        пізніше їх переглянути. Просто натисніть відповідні кнопки для того, щоб
        додати фільм, або щоб побачити більше деталей або позначити фільм як
        переглянутий.
      </Message>

      <div className='flex flex-row my-[40px] gap-5 w-[1000px]'>
        <Input
          type='text'
          placeholder='Пошук фільму'
          variant='SEARCH'
          change={e => setTemp(e.target.value)}
        />
        <Button variant='primary' click={() => setTitle(temp)}>
          Пошук
        </Button>
      </div>
      {title.length !== 0 && film && (
        <div className='mb-8'>
          <h2 className='text-4xl font-bold mb-[50px]'>Шуканий фільм</h2>
          <FilmCard
            key={film.id || index}
            title={film.title}
            image={film.poster}
            rating={film.rating}
            year={film.year}
          />
        </div>
      )}
      <h2 className='text-4xl font-bold mb-[50px]'>Популярні фільми</h2>
      <div className='flex flex-wrap gap-8'>
        {films?.map((film, index) => (
          <FilmCard
            key={film.id || index}
            title={film.title}
            image={film.poster}
            rating={film.rating}
            year={film.year}
          />
        ))}
      </div>
    </div>
  )
}
