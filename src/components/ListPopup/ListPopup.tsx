import { Input } from '../Input'
import { PopupTemplate } from '../PopupTemplate'
import { TListPopup } from './TListPopup'

export const ListPopup = ({ state, setState }: TListPopup) => {
  return (
    <PopupTemplate
      title='Створіть список для перегляду'
      isOpen={state}
      setIsOpen={setState}
    >
      <div className='flex flex-col w-2/3 gap-y-3'>
        <div className='flex flex-row'>
          <p className='font-bold w-48 self-center'>Назва списку</p>
          <Input placeholder='' type='text' />
        </div>
        <div className='flex flex-row'>
          <p className='font-bold w-48 self-center'>Пошук фільму</p>
          <Input placeholder='' type='text' variant='SEARCH' />
        </div>
        <div className='grid grid-cols-3 gap-5 mt-7'></div>
      </div>
    </PopupTemplate>
  )
}
