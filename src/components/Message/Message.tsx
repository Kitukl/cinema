import { TMessage } from './types'

export const Message = ({ title, children, secondpart }: TMessage) => {
  return (
    <div className='flex flex-col mt-[60px] bg-[rgb(64,64,64)] p-[40px] rounded-xl border-2 border-red-800 w-[1000px]'>
      <h1 className='text-5xl font-extrabold'>
        {title} <span className='text-red-600'>{secondpart}</span>
      </h1>
      <p className='text-lg mt-4'>{children}</p>
    </div>
  )
}
