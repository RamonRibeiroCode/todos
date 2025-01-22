export class CannotFindTodoError extends Error {
  constructor() {
    super('Todo does not exists')
  }
}
