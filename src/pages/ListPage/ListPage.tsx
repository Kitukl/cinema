import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { FilmCard } from '../../components/FilmCard'

export const ListPage = () => {
  const { id } = useParams()
  const [list, setList] = useState(null) // Set initial state to null
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetch = async () => {
      if (!token || !id) return

      try {
        const res = await axios.get(`http://localhost:5218/lists/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setList(res.data)
        console.log('Data received:', res.data) // Debugging the received data
      } catch (e) {
        console.error('Не вдалося завантажити список:', e)
      }
    }

    fetch()
  }, [id, token])

  if (!list) {
    return <div>Loading...</div>
  }

  // Check the structure of list.films in the console
  console.log('Films:', list.films)

  return (
    <main className='w-full'>
      <div className='flex justify-center items-center w-full py-20 flex-col'>
        <h2 className='text-3xl font-bold mb-5'>{list.title}</h2>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold'>Фільми</h3>
          <div className='grid grid-cols-5 gap-6 mt-5 ml-80'>
            {list.films && list.films.length > 0 ? (
              list.films.map(film => (
                <FilmCard
                  key={film.id}
                  title={film.title}
                  image={film.poster}
                  rating={film.rating}
                  year={film.year}
                />
              ))
            ) : (
              <p>Немає фільмів для відображення.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
