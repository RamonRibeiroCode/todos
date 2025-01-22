import { TodoRepository } from '../repositories/todo-repository'

export interface ListUseCaseParams {
  title: string
  description: string
}

export class ListUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute() {
    return await this.todoRepository.list()
  }
}
