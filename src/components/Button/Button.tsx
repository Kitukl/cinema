import { STYLES } from './styles.ts'
import { TButton } from './types.ts'

export const Button = ({ children, variant, click, typeOfButton }: TButton) => {
  return (
    <button className={STYLES[variant]} onClick={click} type={typeOfButton}>
      {children}
    </button>
  )
}
