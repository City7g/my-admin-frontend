interface User {
  id: number
  name: string
  email: string
  isAdmin: boolean
  created_at: Date
  updated_at: Date
}

export type { User }