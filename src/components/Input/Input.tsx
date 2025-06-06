import { STYLES } from './styles'
import { TInput } from './types'

export const Input = ({ placeholder, type, variant, change }: TInput) => {
  const classname = variant && STYLES[variant] ? STYLES[variant] : ''
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classname}
      onChange={change}
    />
  )
}
