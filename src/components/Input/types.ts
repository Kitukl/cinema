export interface TInput {
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  variant?: 'LOGIN' | 'SEARCH'
}
