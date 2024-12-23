export interface TInput {
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void // Оновлено
  placeholder?: string
  type?: string
}
