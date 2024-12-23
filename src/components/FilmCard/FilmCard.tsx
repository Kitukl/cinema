import { Button } from '../Button'
import { TCard } from './types'

export const FilmCard = ({ title, year, rating, image }: TCard) => {
  const raitingEmoji = () => {
    if (rating < 50) {
      return '😡'
    } else if (rating >= 50 && rating <= 80) {
      return '😐'
    } else {
      return '😊'
    }
  }

  const emoji = raitingEmoji()

  return (
    <div className='w-[270px] h-[620px] bg-[rgb(50,50,50)] flex flex-col rounded-lg'>
      <img src={image} alt='Film image' className='rounded-lg' />
      <p className='text-lg p-2 font-bold'>{title}</p>
      <div className='flex flex-row justify-between p-3'>
        <p className='font-thin  text-lg'>({year})</p>
        <Button variant='save'>
          <img src='/src/assets/save.svg' alt='save' />
        </Button>
      </div>
      <div className='rating flex flex-row justify-between p-2'>
        <p className='text-4xl'>{emoji}</p>
        <p className='self-center'>{rating}/100</p>
      </div>
    </div>
  )
}
