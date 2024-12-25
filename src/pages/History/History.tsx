import { Button } from '../../components/Button'
import { filmsData } from '../../components/data'
import { FilmCard } from '../../components/FilmCard'
import { Input } from '../../components/Input'

export const History = () => {
  return (
    <div className='flex flex-col ml-[500px] w-full'>
      <div className='flex flex-row w-[1100px] mt-[80px] gap-5'>
        <Input placeholder='Пошук по історії' type='text' />
        <Button variant='primary'>Пошук</Button>
        <Button variant='primary'>Очистити історію</Button>
      </div>
      <div className='mt-[90px] grid grid-cols-5 gap-y-8'>
        {filmsData.map(el => (
          <FilmCard
            key={el.title}
            title={el.title}
            image={el.image}
            rating={el.rating}
            year={el.year}
          />
        ))}
      </div>
    </div>
  )
}
