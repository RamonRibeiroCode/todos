import { CreateUseCaseParams } from '@/use-cases/create'

export interface Todo {
  title: string
  description: string
  done: boolean
}

export interface TodoRepository {
  create(data: CreateUseCaseParams): void
  list(): Promise<Todo[]>
}
