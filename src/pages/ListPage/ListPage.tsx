import axios from 'axios'
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router'
import {FilmCard} from '../../components/FilmCard'
import {Button} from '../../components/Button'

export const ListPage = () => {
  const { id } = useParams()
  const [list, setList] = useState(null)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

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
  console.log('Films:', list.films)

  const handleDelete = async () => {
    try{
      await axios.delete(`http://localhost:5218/lists/${id}`)
    } catch (e){
      console.log(e)
    }
  }

  return (
    <main className='w-full'>
      <div className='flex justify-center items-center w-full py-20 flex-col'>
        <h2 className='text-3xl font-bold mb-5'>{list.title}</h2>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold'>Фільми</h3>
          <Button click={handleDelete}>Видалити</Button>
          <div className='grid grid-cols-5 gap-6 mt-5 ml-80'>
            {list.films && list.films.length > 0 ? (
              list.films.map(film => (
                <FilmCard
                  key={film.id}
                  title={film.title}
                  image={film.poster}
                  rating={film.rating}
                  year={film.year}
                  click={() => navigate(`/films/${film?.id}`)}
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
