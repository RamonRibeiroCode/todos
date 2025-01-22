import { PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb'
import { Todo, TodoRepository } from '../todo-repository'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { randomUUID } from 'crypto'
import { CreateUseCaseParams } from '@/use-cases/create'
import { env } from '@/env'

export class DynamoTodoRepository implements TodoRepository {
  dinamyClient: DynamoDBClient

  constructor() {
    this.dinamyClient = new DynamoDBClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: env.ACCESS_KEY_ID,
        secretAccessKey: env.SECRET_ACCESS_KEY,
      },
    })
  }

  async list() {
    const command = new ScanCommand({ TableName: 'todos' })

    const todos = await this.dinamyClient.send(command)

    return todos.Items as Todo[]
  }

  async create(data: CreateUseCaseParams) {
    const command = new PutCommand({
      Item: {
        id: randomUUID(),
        ...data,
        done: false,
      },
      TableName: 'todos',
    })

    return await this.dinamyClient.send(command)
  }
}
