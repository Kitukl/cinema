import { TInput } from './types'

export const Input = ({ placeholder, type }: TInput) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='p-2 bg-black border-2 border-slate-700 rounded-lg w-full'
    />
  )
}
