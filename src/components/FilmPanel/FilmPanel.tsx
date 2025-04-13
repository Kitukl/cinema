import { Button } from '../Button'
import { TPanel } from './types'

type FilmPanelProps = TPanel & {
  inArray: boolean
  onSave: () => void
}

export const FilmPanel = ({
  title,
  year,
  rating,
  onSave,
  inArray,
}: FilmPanelProps) => {
  return (
    <div className='flex flex-row border-2 border-red-600 p-4 rounded-md justify-between items-center'>
      <span className='text-xl font-bold'>{title}</span>
      <span className='text-lg font-medium'>{year}</span>
      <span className='text-lg font-medium'>{rating}</span>
      <Button variant='secondary' click={onSave}>
        {inArray ? 'Видалити' : 'Зберегти'}
      </Button>
    </div>
  )
}
