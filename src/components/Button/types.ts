import { ReactNode } from 'react'

export type TButton = {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'save' | 'list'
  click?: () => void
  typeOfButton?: 'button' | 'reset' | 'submit'
}
