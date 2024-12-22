import { STYLES } from './styles.ts'
import { TButton } from './types.ts'

export const Button = ({ children, variant }: TButton) => {
  return (
    <button
      className={variant === 'secondary' ? STYLES.SECONDARY : STYLES.PRIMARY}
    >
      {children}
    </button>
  )
}
