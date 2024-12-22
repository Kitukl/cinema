import { Button } from '../Button'
import { User } from '../User'

export const Sidebar = () => {
  return (
    <aside className='bg-black px-20 py-5 h-full fixed'>
      <h2 className='text-red-600 font-extrabold font-5xl uppercase text-4xl mb-10'>
        Watchlists
      </h2>
      <input
        type='text'
        placeholder='Пошук'
        className='p-2 bg-black border-2 border-slate-700 rounded-lg w-full'
      />
      <div className='flex flex-col my-6'>
        <Button variant='secondary'>Головна</Button>
        <Button variant='secondary'>Історія</Button>
        <Button variant='primary'>Додати список</Button>
      </div>
      <h4 className='uppercase font-bold text-lg'>Мій список</h4>
      <div className='array flex-grow'></div>
      <div className='mt-auto'>
        <User isLogged={false} />
      </div>
    </aside>
  )
}
