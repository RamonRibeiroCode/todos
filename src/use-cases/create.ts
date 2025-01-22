import { TodoRepository } from '../repositories/todo-repository'

export interface CreateUseCaseParams {
  title: string
  description: string
}

export class CreateUseCase {
  constructor(private todoRepository: TodoRepository) {}

  async execute({ title, description }: CreateUseCaseParams) {
    return await this.todoRepository.create({ title, description })
  }
}
