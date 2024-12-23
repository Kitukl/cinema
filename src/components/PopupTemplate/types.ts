import { ReactNode } from 'react'

export type TPopup = {
  children: ReactNode
  title: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  position?: 'left' | 'center' | 'right'
}
