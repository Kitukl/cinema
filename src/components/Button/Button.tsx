import { STYLES } from './styles.ts'
import { TButton } from './types.ts'

export const Button = ({ children, variant }: TButton) => {
  return <button className={STYLES[variant]}>{children}</button>
}
