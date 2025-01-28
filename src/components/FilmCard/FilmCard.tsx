import { Button } from '../Button'
import { TCard } from './types'

export const FilmCard = ({ title, year, rating, image }: TCard) => {
  const raitingEmoji = () => {
    if (rating > 80) {
      return '/src/assets/greate.svg'
    } else if (rating >= 35 && rating <= 80) {
      return '/src/assets/good.svg'
    } else {
      return '/src/assets/bad.svg'
    }
  }

  const emoji = raitingEmoji()

  return (
    <div className='w-[250px] h-[590px] bg-[rgb(50,50,50)] flex flex-col rounded-lg'>
      <img src={image} alt='Film image' className='rounded-lg w-full' />
      <p className='text-lg p-2 font-bold'>{title}</p>
      <div className='flex flex-row justify-between p-3'>
        <p className='font-thin  text-lg'>({year})</p>
        <Button variant='save'>
          <img src='/src/' alt='save' />
        </Button>
      </div>
      <div className='rating flex flex-row justify-between p-2'>
        <img src={emoji} alt='stiker' className='w-10' />
        <p className='self-center'>{rating}/100</p>
      </div>
    </div>
  )
}
